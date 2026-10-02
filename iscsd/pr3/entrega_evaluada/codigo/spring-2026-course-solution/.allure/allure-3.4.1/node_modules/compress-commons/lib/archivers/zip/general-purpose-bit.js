import { getShortBytes, getShortBytesValue } from "./util.js";

var DATA_DESCRIPTOR_FLAG = 1 << 3;
var ENCRYPTION_FLAG = 1 << 0;
var NUMBER_OF_SHANNON_FANO_TREES_FLAG = 1 << 2;
var SLIDING_DICTIONARY_SIZE_FLAG = 1 << 1;
var STRONG_ENCRYPTION_FLAG = 1 << 6;
var UFT8_NAMES_FLAG = 1 << 11;

export default class GeneralPurposeBit {
  constructor() {
    this.descriptor = false;
    this.encryption = false;
    this.utf8 = false;
    this.numberOfShannonFanoTrees = 0;
    this.strongEncryption = false;
    this.slidingDictionarySize = 0;
    return this;
  }
  encode() {
    return getShortBytes(
      (this.descriptor ? DATA_DESCRIPTOR_FLAG : 0) |
        (this.utf8 ? UFT8_NAMES_FLAG : 0) |
        (this.encryption ? ENCRYPTION_FLAG : 0) |
        (this.strongEncryption ? STRONG_ENCRYPTION_FLAG : 0),
    );
  }
  static parse(buf, offset) {
    var flag = getShortBytesValue(buf, offset);
    var gbp = new GeneralPurposeBit();
    gbp.useDataDescriptor((flag & DATA_DESCRIPTOR_FLAG) !== 0);
    gbp.useUTF8ForNames((flag & UFT8_NAMES_FLAG) !== 0);
    gbp.useStrongEncryption((flag & STRONG_ENCRYPTION_FLAG) !== 0);
    gbp.useEncryption((flag & ENCRYPTION_FLAG) !== 0);
    gbp.setSlidingDictionarySize(
      (flag & SLIDING_DICTIONARY_SIZE_FLAG) !== 0 ? 8192 : 4096,
    );
    gbp.setNumberOfShannonFanoTrees(
      (flag & NUMBER_OF_SHANNON_FANO_TREES_FLAG) !== 0 ? 3 : 2,
    );
    return gbp;
  }
  setNumberOfShannonFanoTrees(n) {
    this.numberOfShannonFanoTrees = n;
  }
  getNumberOfShannonFanoTrees() {
    return this.numberOfShannonFanoTrees;
  }
  setSlidingDictionarySize(n) {
    this.slidingDictionarySize = n;
  }
  getSlidingDictionarySize() {
    return this.slidingDictionarySize;
  }
  useDataDescriptor(b) {
    this.descriptor = b;
  }
  usesDataDescriptor() {
    return this.descriptor;
  }
  useEncryption(b) {
    this.encryption = b;
  }
  usesEncryption() {
    return this.encryption;
  }
  useStrongEncryption(b) {
    this.strongEncryption = b;
  }
  usesStrongEncryption() {
    return this.strongEncryption;
  }
  useUTF8ForNames(b) {
    this.utf8 = b;
  }
  usesUTF8ForNames() {
    return this.utf8;
  }
}
