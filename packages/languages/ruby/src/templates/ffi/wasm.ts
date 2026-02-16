export function ffiWasmTemplate(): string {
  return [
    "# Example placeholder for WASM via a runtime gem",
    "module_path = 'math.wasm'",
    "puts module_path"
  ].join("\n");
}
