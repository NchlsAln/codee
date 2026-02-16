"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiNativeTemplate = ffiNativeTemplate;
function ffiNativeTemplate() {
    return [
        "from cffi import FFI",
        "",
        "ffi = FFI()",
        "ffi.cdef('int add(int a, int b);')",
        "lib = ffi.dlopen('./libadd.so')",
        "",
        "print(lib.add(2, 3))"
    ].join("\n");
}
