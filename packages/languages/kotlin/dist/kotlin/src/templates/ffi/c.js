"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiCTemplate = ffiCTemplate;
function ffiCTemplate() {
    return [
        "import kotlinx.cinterop.*",
        "",
        "@CName(\"add\")",
        "external fun add(a: Int, b: Int): Int",
        "",
        "fun main() {",
        "  println(add(2, 3))",
        "}"
    ].join("\n");
}
