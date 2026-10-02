import { Stream } from "stream";
import { PassThrough } from "readable-stream";
import { isStream } from "is-stream";

export function normalizeInputSource(source) {
  if (source === null) {
    return Buffer.alloc(0);
  } else if (typeof source === "string") {
    return Buffer.from(source);
  } else if (isStream(source) && !source._readableState) {
    var normalized = new PassThrough();
    source.pipe(normalized);
    return normalized;
  }
  return source;
}

export default {
  normalizeInputSource,
};
