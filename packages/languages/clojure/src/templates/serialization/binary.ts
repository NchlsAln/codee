export function binaryTemplate(): string {
  return [
    "(def data (.getBytes \"hello\"))",
    "(println (count data))"
  ].join("\n");
}
