export function ffiWasmTemplate(): string {
  return [
    "@JsExport",
    "fun add(a: Int, b: Int): Int = a + b"
  ].join("\n");
}
