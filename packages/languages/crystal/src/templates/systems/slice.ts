export function sliceTemplate(): string {
  return [
    "bytes = Bytes[1, 2, 3]",
    "slice = bytes[0, 2]",
    "puts slice"
  ].join("\n");
}
