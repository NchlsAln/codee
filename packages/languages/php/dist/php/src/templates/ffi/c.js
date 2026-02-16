"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiCTemplate = ffiCTemplate;
function ffiCTemplate() {
    return [
        "<?php",
        "$ffi = FFI::cdef('int add(int a, int b);', 'libmath.so');",
        "echo $ffi->add(1, 2);"
    ].join("\n");
}
