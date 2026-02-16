"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiWasmTemplate = ffiWasmTemplate;
function ffiWasmTemplate() {
    return "#include <emscripten/emscripten.h>\n\nextern \"C\" {\n  EMSCRIPTEN_KEEPALIVE\n  int add(int a, int b) {\n    return a + b;\n  }\n}\n";
}
