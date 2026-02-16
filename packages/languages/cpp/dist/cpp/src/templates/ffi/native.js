"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiNativeTemplate = ffiNativeTemplate;
function ffiNativeTemplate() {
    return "#include <pybind11/pybind11.h>\n\nint add(int a, int b) { return a + b; }\n\nPYBIND11_MODULE(addon, m) {\n  m.def(\"add\", &add);\n}\n";
}
