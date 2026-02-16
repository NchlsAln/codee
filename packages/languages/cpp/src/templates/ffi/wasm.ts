export function ffiWasmTemplate(): string {
  return "#include <emscripten/emscripten.h>\n\nextern \"C\" {\n  EMSCRIPTEN_KEEPALIVE\n  int add(int a, int b) {\n    return a + b;\n  }\n}\n";
}
