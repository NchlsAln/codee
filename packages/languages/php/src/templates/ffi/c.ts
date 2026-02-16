export function ffiCTemplate(): string {
  return [
    "<?php",
    "$ffi = FFI::cdef('int add(int a, int b);', 'libmath.so');",
    "echo $ffi->add(1, 2);"
  ].join("\n");
}
