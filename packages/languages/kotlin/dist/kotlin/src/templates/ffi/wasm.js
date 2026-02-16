"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiWasmTemplate = ffiWasmTemplate;
function ffiWasmTemplate() {
    return [
        "@JsExport",
        "fun add(a: Int, b: Int): Int = a + b"
    ].join("\n");
}
