"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiCTemplate = ffiCTemplate;
function ffiCTemplate() {
    return [
        "import Glibc",
        "",
        "let length = strlen(\"hello\")",
        "print(length)"
    ].join("\n");
}
