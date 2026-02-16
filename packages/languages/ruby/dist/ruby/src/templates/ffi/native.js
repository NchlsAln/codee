"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiNativeTemplate = ffiNativeTemplate;
function ffiNativeTemplate() {
    return [
        "require 'fiddle'",
        "handle = Fiddle.dlopen('libc.so.6')",
        "puts handle.to_i"
    ].join("\n");
}
