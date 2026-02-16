export function ffiWasmTemplate(): string {
  return [
    "<?php",
    "// Example placeholder for WASM interop via a runtime extension",
    "$module = 'math.wasm';",
    "echo $module;"
  ].join("\n");
}
