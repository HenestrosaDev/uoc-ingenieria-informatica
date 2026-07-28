export const WORD = 4;
export const DWORD = 8;
export const EMPTY = Buffer.alloc(0);
export const SHORT = 2;
export const SHORT_MASK = 0xffff;
export const SHORT_SHIFT = 16;
export const SHORT_ZERO = Buffer.from(Array(2));
export const LONG = 4;
export const LONG_ZERO = Buffer.from(Array(4));
export const MIN_VERSION_INITIAL = 10;
export const MIN_VERSION_DATA_DESCRIPTOR = 20;
export const MIN_VERSION_ZIP64 = 45;
export const VERSION_MADEBY = 45;
export const METHOD_STORED = 0;
export const METHOD_DEFLATED = 8;
export const PLATFORM_UNIX = 3;
export const PLATFORM_FAT = 0;
export const SIG_LFH = 0x04034b50;
export const SIG_DD = 0x08074b50;
export const SIG_CFH = 0x02014b50;
export const SIG_EOCD = 0x06054b50;
export const SIG_ZIP64_EOCD = 0x06064b50;
export const SIG_ZIP64_EOCD_LOC = 0x07064b50;
export const ZIP64_MAGIC_SHORT = 0xffff;
export const ZIP64_MAGIC = 0xffffffff;
export const ZIP64_EXTRA_ID = 0x0001;
export const ZLIB_NO_COMPRESSION = 0;
export const ZLIB_BEST_SPEED = 1;
export const ZLIB_BEST_COMPRESSION = 9;
export const ZLIB_DEFAULT_COMPRESSION = -1;
export const MODE_MASK = 0xfff;
export const DEFAULT_FILE_MODE = 33188;
export const DEFAULT_DIR_MODE = 16877;
export const EXT_FILE_ATTR_DIR = 1106051088;
export const EXT_FILE_ATTR_FILE = 2175008800;
export const S_IFMT = 61440;
export const S_IFIFO = 4096;
export const S_IFCHR = 8192;
export const S_IFDIR = 16384;
export const S_IFBLK = 24576;
export const S_IFREG = 32768;
export const S_IFLNK = 40960;
export const S_IFSOCK = 49152;
export const S_DOS_A = 32;
export const S_DOS_D = 16;
export const S_DOS_V = 8;
export const S_DOS_S = 4;
export const S_DOS_H = 2;
export const S_DOS_R = 1; // 01 Read Only
export default {
  WORD,
  DWORD,
  EMPTY,
  SHORT,
  SHORT_MASK,
  SHORT_SHIFT,
  SHORT_ZERO,
  LONG,
  LONG_ZERO,
  MIN_VERSION_INITIAL,
  MIN_VERSION_DATA_DESCRIPTOR,
  MIN_VERSION_ZIP64,
  VERSION_MADEBY,
  METHOD_STORED,
  METHOD_DEFLATED,
  PLATFORM_UNIX,
  PLATFORM_FAT,
  SIG_LFH,
  SIG_DD,
  SIG_CFH,
  SIG_EOCD,
  SIG_ZIP64_EOCD,
  SIG_ZIP64_EOCD_LOC,
  ZIP64_MAGIC_SHORT,
  ZIP64_MAGIC,
  ZIP64_EXTRA_ID,
  ZLIB_NO_COMPRESSION,
  ZLIB_BEST_SPEED,
  ZLIB_BEST_COMPRESSION,
  ZLIB_DEFAULT_COMPRESSION,
  MODE_MASK,
  DEFAULT_FILE_MODE,
  DEFAULT_DIR_MODE,
  EXT_FILE_ATTR_DIR,
  EXT_FILE_ATTR_FILE,
  S_IFMT,
  S_IFIFO,
  S_IFCHR,
  S_IFDIR,
  S_IFBLK,
  S_IFREG,
  S_IFLNK,
  S_IFSOCK,
  S_DOS_A,
  S_DOS_D,
  S_DOS_V,
  S_DOS_S,
  S_DOS_H,
  S_DOS_R,
};
