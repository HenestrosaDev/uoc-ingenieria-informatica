import { inherits } from "util";
import crc32 from "crc-32";
import { CRC32Stream, DeflateCRC32Stream } from "crc32-stream";
import ArchiveOutputStream from "../archive-output-stream.js";
import ZipArchiveEntry from "./zip-archive-entry.js";
import GeneralPurposeBit from "./general-purpose-bit.js";
import {
  LONG_ZERO,
  METHOD_DEFLATED,
  METHOD_STORED,
  MIN_VERSION_DATA_DESCRIPTOR,
  MIN_VERSION_ZIP64,
  SHORT_ZERO,
  SIG_EOCD,
  SIG_DD,
  SIG_CFH,
  SIG_LFH,
  SIG_ZIP64_EOCD,
  SIG_ZIP64_EOCD_LOC,
  VERSION_MADEBY,
  ZIP64_EXTRA_ID,
  ZIP64_MAGIC,
  ZIP64_MAGIC_SHORT,
  ZLIB_BEST_SPEED,
} from "./constants.js";
import { getEightBytes, getLongBytes, getShortBytes } from "./util.js";

function _defaults(o) {
  if (typeof o !== "object") {
    o = {};
  }
  if (typeof o.zlib !== "object") {
    o.zlib = {};
  }
  if (typeof o.zlib.level !== "number") {
    o.zlib.level = ZLIB_BEST_SPEED;
  }
  o.forceZip64 = !!o.forceZip64;
  o.forceLocalTime = !!o.forceLocalTime;
  return o;
}

export default class ZipArchiveOutputStream extends ArchiveOutputStream {
  constructor(options) {
    const _options = _defaults(options);
    super(_options);
    this.options = _options;
    this._entry = null;
    this._entries = [];
    this._archive = {
      centralLength: 0,
      centralOffset: 0,
      comment: "",
      finish: false,
      finished: false,
      processing: false,
      forceZip64: _options.forceZip64,
      forceLocalTime: _options.forceLocalTime,
    };
  }

  _afterAppend(ae) {
    this._entries.push(ae);
    if (ae.getGeneralPurposeBit().usesDataDescriptor()) {
      this._writeDataDescriptor(ae);
    }
    this._archive.processing = false;
    this._entry = null;
    if (this._archive.finish && !this._archive.finished) {
      this._finish();
    }
  }

  _appendBuffer(ae, source, callback) {
    if (source.length === 0) {
      ae.setMethod(METHOD_STORED);
    }
    var method = ae.getMethod();
    if (method === METHOD_STORED) {
      ae.setSize(source.length);
      ae.setCompressedSize(source.length);
      ae.setCrc(crc32.buf(source) >>> 0);
    }
    this._writeLocalFileHeader(ae);
    if (method === METHOD_STORED) {
      this.write(source);
      this._afterAppend(ae);
      callback(null, ae);
      return;
    } else if (method === METHOD_DEFLATED) {
      this._smartStream(ae, callback).end(source);
      return;
    } else {
      callback(new Error("compression method " + method + " not implemented"));
      return;
    }
  }

  _appendStream(ae, source, callback) {
    ae.getGeneralPurposeBit().useDataDescriptor(true);
    ae.setVersionNeededToExtract(MIN_VERSION_DATA_DESCRIPTOR);
    this._writeLocalFileHeader(ae);
    var smart = this._smartStream(ae, callback);
    source.once("error", function (err) {
      smart.emit("error", err);
      smart.end();
    });
    source.pipe(smart);
  }

  _finish() {
    this._archive.centralOffset = this.offset;
    this._entries.forEach(
      function (ae) {
        this._writeCentralFileHeader(ae);
      }.bind(this),
    );
    this._archive.centralLength = this.offset - this._archive.centralOffset;
    if (this.isZip64()) {
      this._writeCentralDirectoryZip64();
    }
    this._writeCentralDirectoryEnd();
    this._archive.processing = false;
    this._archive.finish = true;
    this._archive.finished = true;
    this.end();
  }

  _normalizeEntry(ae) {
    if (ae.getMethod() === -1) {
      ae.setMethod(METHOD_DEFLATED);
    }
    if (ae.getMethod() === METHOD_DEFLATED) {
      ae.getGeneralPurposeBit().useDataDescriptor(true);
      ae.setVersionNeededToExtract(MIN_VERSION_DATA_DESCRIPTOR);
    }
    if (ae.getTime() === -1) {
      ae.setTime(new Date(), this._archive.forceLocalTime);
    }
    ae._offsets = {
      file: 0,
      data: 0,
      contents: 0,
    };
  }

  _smartStream(ae, callback) {
    var deflate = ae.getMethod() === METHOD_DEFLATED;
    var process = deflate
      ? new DeflateCRC32Stream(this.options.zlib)
      : new CRC32Stream();
    var error = null;
    function handleStuff() {
      var digest = process.digest().readUInt32BE(0);
      ae.setCrc(digest);
      ae.setSize(process.size());
      ae.setCompressedSize(process.size(true));
      this._afterAppend(ae);
      callback(error, ae);
    }
    process.once("end", handleStuff.bind(this));
    process.once("error", function (err) {
      error = err;
    });
    process.pipe(this, { end: false });
    return process;
  }

  _writeCentralDirectoryEnd() {
    var records = this._entries.length;
    var size = this._archive.centralLength;
    var offset = this._archive.centralOffset;
    if (this.isZip64()) {
      records = ZIP64_MAGIC_SHORT;
      size = ZIP64_MAGIC;
      offset = ZIP64_MAGIC;
    }
    // signature
    this.write(getLongBytes(SIG_EOCD));
    // disk numbers
    this.write(SHORT_ZERO);
    this.write(SHORT_ZERO);
    // number of entries
    this.write(getShortBytes(records));
    this.write(getShortBytes(records));
    // length and location of CD
    this.write(getLongBytes(size));
    this.write(getLongBytes(offset));
    // archive comment
    var comment = this.getComment();
    var commentLength = Buffer.byteLength(comment);
    this.write(getShortBytes(commentLength));
    this.write(comment);
  }

  _writeCentralDirectoryZip64() {
    // signature
    this.write(getLongBytes(SIG_ZIP64_EOCD));
    // size of the ZIP64 EOCD record
    this.write(getEightBytes(44));
    // version made by
    this.write(getShortBytes(MIN_VERSION_ZIP64));
    // version to extract
    this.write(getShortBytes(MIN_VERSION_ZIP64));
    // disk numbers
    this.write(LONG_ZERO);
    this.write(LONG_ZERO);
    // number of entries
    this.write(getEightBytes(this._entries.length));
    this.write(getEightBytes(this._entries.length));
    // length and location of CD
    this.write(getEightBytes(this._archive.centralLength));
    this.write(getEightBytes(this._archive.centralOffset));
    // extensible data sector
    // not implemented at this time
    // end of central directory locator
    this.write(getLongBytes(SIG_ZIP64_EOCD_LOC));
    // disk number holding the ZIP64 EOCD record
    this.write(LONG_ZERO);
    // relative offset of the ZIP64 EOCD record
    this.write(
      getEightBytes(this._archive.centralOffset + this._archive.centralLength),
    );
    // total number of disks
    this.write(getLongBytes(1));
  }

  _writeCentralFileHeader(ae) {
    var gpb = ae.getGeneralPurposeBit();
    var method = ae.getMethod();
    var fileOffset = ae._offsets.file;
    var size = ae.getSize();
    var compressedSize = ae.getCompressedSize();
    if (ae.isZip64() || fileOffset > ZIP64_MAGIC) {
      size = ZIP64_MAGIC;
      compressedSize = ZIP64_MAGIC;
      fileOffset = ZIP64_MAGIC;
      ae.setVersionNeededToExtract(MIN_VERSION_ZIP64);
      var extraBuf = Buffer.concat(
        [
          getShortBytes(ZIP64_EXTRA_ID),
          getShortBytes(24),
          getEightBytes(ae.getSize()),
          getEightBytes(ae.getCompressedSize()),
          getEightBytes(ae._offsets.file),
        ],
        28,
      );
      ae.setExtra(extraBuf);
    }
    // signature
    this.write(getLongBytes(SIG_CFH));
    // version made by
    this.write(getShortBytes((ae.getPlatform() << 8) | VERSION_MADEBY));
    // version to extract and general bit flag
    this.write(getShortBytes(ae.getVersionNeededToExtract()));
    this.write(gpb.encode());
    // compression method
    this.write(getShortBytes(method));
    // datetime
    this.write(getLongBytes(ae.getTimeDos()));
    // crc32 checksum
    this.write(getLongBytes(ae.getCrc()));
    // sizes
    this.write(getLongBytes(compressedSize));
    this.write(getLongBytes(size));
    var name = ae.getName();
    var comment = ae.getComment();
    var extra = ae.getCentralDirectoryExtra();
    if (gpb.usesUTF8ForNames()) {
      name = Buffer.from(name);
      comment = Buffer.from(comment);
    }
    // name length
    this.write(getShortBytes(name.length));
    // extra length
    this.write(getShortBytes(extra.length));
    // comments length
    this.write(getShortBytes(comment.length));
    // disk number start
    this.write(SHORT_ZERO);
    // internal attributes
    this.write(getShortBytes(ae.getInternalAttributes()));
    // external attributes
    this.write(getLongBytes(ae.getExternalAttributes()));
    // relative offset of LFH
    this.write(getLongBytes(fileOffset));
    // name
    this.write(name);
    // extra
    this.write(extra);
    // comment
    this.write(comment);
  }

  _writeDataDescriptor(ae) {
    // signature
    this.write(getLongBytes(SIG_DD));
    // crc32 checksum
    this.write(getLongBytes(ae.getCrc()));
    // sizes
    if (ae.isZip64()) {
      this.write(getEightBytes(ae.getCompressedSize()));
      this.write(getEightBytes(ae.getSize()));
    } else {
      this.write(getLongBytes(ae.getCompressedSize()));
      this.write(getLongBytes(ae.getSize()));
    }
  }

  _writeLocalFileHeader(ae) {
    var gpb = ae.getGeneralPurposeBit();
    var method = ae.getMethod();
    var name = ae.getName();
    var extra = ae.getLocalFileDataExtra();
    if (ae.isZip64()) {
      gpb.useDataDescriptor(true);
      ae.setVersionNeededToExtract(MIN_VERSION_ZIP64);
    }
    if (gpb.usesUTF8ForNames()) {
      name = Buffer.from(name);
    }
    ae._offsets.file = this.offset;
    // signature
    this.write(getLongBytes(SIG_LFH));
    // version to extract and general bit flag
    this.write(getShortBytes(ae.getVersionNeededToExtract()));
    this.write(gpb.encode());
    // compression method
    this.write(getShortBytes(method));
    // datetime
    this.write(getLongBytes(ae.getTimeDos()));
    ae._offsets.data = this.offset;
    // crc32 checksum and sizes
    if (gpb.usesDataDescriptor()) {
      this.write(LONG_ZERO);
      this.write(LONG_ZERO);
      this.write(LONG_ZERO);
    } else {
      this.write(getLongBytes(ae.getCrc()));
      this.write(getLongBytes(ae.getCompressedSize()));
      this.write(getLongBytes(ae.getSize()));
    }
    // name length
    this.write(getShortBytes(name.length));
    // extra length
    this.write(getShortBytes(extra.length));
    // name
    this.write(name);
    // extra
    this.write(extra);
    ae._offsets.contents = this.offset;
  }

  getComment(comment) {
    return this._archive.comment !== null ? this._archive.comment : "";
  }

  isZip64() {
    return (
      this._archive.forceZip64 ||
      this._entries.length > ZIP64_MAGIC_SHORT ||
      this._archive.centralLength > ZIP64_MAGIC ||
      this._archive.centralOffset > ZIP64_MAGIC
    );
  }

  setComment(comment) {
    this._archive.comment = comment;
  }
}
