"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiCTemplate = ffiCTemplate;
function ffiCTemplate() {
    return [
        "require 'ffi'",
        "module MathLib",
        "  extend FFI::Library",
        "  ffi_lib 'libmath.so'",
        "  attach_function :add, [:int, :int], :int",
        "end",
        "puts MathLib.add(1, 2)"
    ].join("\n");
}
