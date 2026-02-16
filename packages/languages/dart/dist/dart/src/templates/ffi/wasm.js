"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiWasmTemplate = ffiWasmTemplate;
function ffiWasmTemplate() {
    return [
        "import 'dart:js_interop';",
        "",
        "@JS('add') external int add(int a, int b);",
        "print(add(1, 2));"
    ].join("\n");
}
