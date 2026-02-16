"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiCTemplate = ffiCTemplate;
function ffiCTemplate() {
    return "extern \"C\" int add(int a, int b);\n\nint main() {\n  return add(2, 3);\n}\n";
}
