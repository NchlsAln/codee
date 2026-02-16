"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiCTemplate = ffiCTemplate;
function ffiCTemplate() {
    return [
        "import ffi from 'ffi-napi';",
        "",
        "const lib = ffi.Library('./libmath', { add: ['int', ['int', 'int']] });",
        "",
        "console.log(lib.add(2, 3));"
    ].join("\n");
}
