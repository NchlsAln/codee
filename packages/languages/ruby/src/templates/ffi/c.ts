export function ffiCTemplate(): string {
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
