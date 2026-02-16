export function ffiWasmTemplate(): string {
  return [
    "import JavaScriptKit",
    "",
    "let global = JSObject.global",
    "let result = global.Math.function?.callAsFunction(global.Math.object, 1, 2)",
    "print(result?.number ?? 0)"
  ].join("\n");
}
