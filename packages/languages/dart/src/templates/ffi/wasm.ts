export function ffiWasmTemplate(): string {
  return [
    "import 'dart:js_interop';",
    "",
    "@JS('add') external int add(int a, int b);",
    "print(add(1, 2));"
  ].join("\n");
}
