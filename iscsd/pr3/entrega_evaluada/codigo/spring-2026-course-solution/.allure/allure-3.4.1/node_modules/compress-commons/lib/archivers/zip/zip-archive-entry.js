import { inherits } from "util";
import normalizePath from "normalize-path";
import ArchiveEntry from "../archive-entry.js";
import GeneralPurposeBit from "./general-purpose-bit.js";
import UnixStat from "./unix-stat.js";
import {
  EMPTY,
  MIN_VERSION_INITIAL,
  MODE_MASK,
  PLATFORM_FAT,
  PLATFORM_UNIX,
  S_DOS_A,
  S_DOS_D,
  S_IFDIR,
  S_IFREG,
  SHORT_MASK,
  SHORT_SHIFT,
  ZIP64_MAGIC,
} from "./constants.js";
import { dateToDos, dosToDate } from "./util.js";

export default class ZipArchiveEntry extends ArchiveEntry {
  constructor(name) {
    super();
    this.platform = PLATFORM_FAT;
    this.method = -1;
    this.name = null;
    this.size = 0;
    this.csize = 0;
    this.gpb = new GeneralPurposeBit();
    this.crc = 0;
    this.time = -1;
    this.minver = MIN_VERSION_INITIAL;
    this.mode = -1;
    this.extra = null;
    this.exattr = 0;
    this.inattr = 0;
    this.comment = null;
    if (name) {
      this.setName(name);
    }
  }

  /**
   * Returns the extra fields related to the entry.
   *
   * @returns {Buffer}
   */
  getCentralDirectoryExtra() {
    return this.getExtra();
  }

  /**
   * Returns the comment set for the entry.
   *
   * @returns {string}
   */
  getComment() {
    return this.comment !== null ? this.comment : "";
  }

  /**
   * Returns the compressed size of the entry.
   *
   * @returns {number}
   */
  getCompressedSize() {
    return this.csize;
  }

  /**
   * Returns the CRC32 digest for the entry.
   *
   * @returns {number}
   */
  getCrc() {
    return this.crc;
  }

  /**
   * Returns the external file attributes for the entry.
   *
   * @returns {number}
   */
  getExternalAttributes = function () {
    return this.exattr;
  };

  /**
   * Returns the extra fields related to the entry.
   *
   * @returns {Buffer}
   */
  getExtra() {
    return this.extra !== null ? this.extra : EMPTY;
  }

  /**
   * Returns the general purpose bits related to the entry.
   *
   * @returns {GeneralPurposeBit}
   */
  getGeneralPurposeBit() {
    return this.gpb;
  }

  /**
   * Returns the internal file attributes for the entry.
   *
   * @returns {number}
   */
  getInternalAttributes() {
    return this.inattr;
  }

  /**
   * Returns the last modified date of the entry.
   *
   * @returns {number}
   */
  getLastModifiedDate() {
    return this.getTime();
  }

  /**
   * Returns the extra fields related to the entry.
   *
   * @returns {Buffer}
   */
  getLocalFileDataExtra() {
    return this.getExtra();
  }

  /**
   * Returns the compression method used on the entry.
   *
   * @returns {number}
   */
  getMethod() {
    return this.method;
  }

  /**
   * Returns the filename of the entry.
   *
   * @returns {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Returns the platform on which the entry was made.
   *
   * @returns {number}
   */
  getPlatform() {
    return this.platform;
  }
  /**
   * Returns the size of the entry.
   *
   * @returns {number}
   */
  getSize() {
    return this.size;
  }
  /**
   * Returns a date object representing the last modified date of the entry.
   *
   * @returns {number|Date}
   */
  getTime() {
    return this.time !== -1 ? dosToDate(this.time) : -1;
  }
  /**
   * Returns the DOS timestamp for the entry.
   *
   * @returns {number}
   */
  getTimeDos() {
    return this.time !== -1 ? this.time : 0;
  }
  /**
   * Returns the UNIX file permissions for the entry.
   *
   * @returns {number}
   */
  getUnixMode() {
    return this.platform !== PLATFORM_UNIX
      ? 0
      : (this.getExternalAttributes() >> SHORT_SHIFT) & SHORT_MASK;
  }
  /**
   * Returns the version of ZIP needed to extract the entry.
   *
   * @returns {number}
   */
  getVersionNeededToExtract() {
    return this.minver;
  }
  /**
   * Sets the comment of the entry.
   *
   * @param comment
   */
  setComment(comment) {
    if (Buffer.byteLength(comment) !== comment.length) {
      this.getGeneralPurposeBit().useUTF8ForNames(true);
    }
    this.comment = comment;
  }
  /**
   * Sets the compressed size of the entry.
   *
   * @param size
   */
  setCompressedSize(size) {
    if (size < 0) {
      throw new Error("invalid entry compressed size");
    }
    this.csize = size;
  }
  /**
   * Sets the checksum of the entry.
   *
   * @param crc
   */
  setCrc(crc) {
    if (crc < 0) {
      throw new Error("invalid entry crc32");
    }
    this.crc = crc;
  }
  /**
   * Sets the external file attributes of the entry.
   *
   * @param attr
   */
  setExternalAttributes(attr) {
    this.exattr = attr >>> 0;
  }
  /**
   * Sets the extra fields related to the entry.
   *
   * @param extra
   */
  setExtra(extra) {
    this.extra = extra;
  }
  /**
   * Sets the general purpose bits related to the entry.
   *
   * @param gpb
   */
  setGeneralPurposeBit(gpb) {
    if (!(gpb instanceof GeneralPurposeBit)) {
      throw new Error("invalid entry GeneralPurposeBit");
    }
    this.gpb = gpb;
  }
  /**
   * Sets the internal file attributes of the entry.
   *
   * @param attr
   */
  setInternalAttributes(attr) {
    this.inattr = attr;
  }
  /**
   * Sets the compression method of the entry.
   *
   * @param method
   */
  setMethod(method) {
    if (method < 0) {
      throw new Error("invalid entry compression method");
    }
    this.method = method;
  }
  /**
   * Sets the name of the entry.
   *
   * @param name
   * @param prependSlash
   */
  setName(name, prependSlash = false) {
    name = normalizePath(name, false)
      .replace(/^\w+:/, "")
      .replace(/^(\.\.\/|\/)+/, "");
    if (prependSlash) {
      name = `/${name}`;
    }
    if (Buffer.byteLength(name) !== name.length) {
      this.getGeneralPurposeBit().useUTF8ForNames(true);
    }
    this.name = name;
  }
  /**
   * Sets the platform on which the entry was made.
   *
   * @param platform
   */
  setPlatform(platform) {
    this.platform = platform;
  }
  /**
   * Sets the size of the entry.
   *
   * @param size
   */
  setSize(size) {
    if (size < 0) {
      throw new Error("invalid entry size");
    }
    this.size = size;
  }
  /**
   * Sets the time of the entry.
   *
   * @param time
   * @param forceLocalTime
   */
  setTime(time, forceLocalTime) {
    if (!(time instanceof Date)) {
      throw new Error("invalid entry time");
    }
    this.time = dateToDos(time, forceLocalTime);
  }
  /**
   * Sets the UNIX file permissions for the entry.
   *
   * @param mode
   */
  setUnixMode(mode) {
    mode |= this.isDirectory() ? S_IFDIR : S_IFREG;
    var extattr = 0;
    extattr |= (mode << SHORT_SHIFT) | (this.isDirectory() ? S_DOS_D : S_DOS_A);
    this.setExternalAttributes(extattr);
    this.mode = mode & MODE_MASK;
    this.platform = PLATFORM_UNIX;
  }
  /**
   * Sets the version of ZIP needed to extract this entry.
   *
   * @param minver
   */
  setVersionNeededToExtract(minver) {
    this.minver = minver;
  }
  /**
   * Returns true if this entry represents a directory.
   *
   * @returns {boolean}
   */
  isDirectory() {
    return this.getName().slice(-1) === "/";
  }
  /**
   * Returns true if this entry represents a unix symlink,
   * in which case the entry's content contains the target path
   * for the symlink.
   *
   * @returns {boolean}
   */
  isUnixSymlink() {
    return (
      (this.getUnixMode() & UnixStat.FILE_TYPE_FLAG) === UnixStat.LINK_FLAG
    );
  }

  /**
   * Returns true if this entry is using the ZIP64 extension of ZIP.
   *
   * @returns {boolean}
   */
  isZip64() {
    return this.csize > ZIP64_MAGIC || this.size > ZIP64_MAGIC;
  }
}
