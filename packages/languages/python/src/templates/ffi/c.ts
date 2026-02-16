export function ffiCTemplate(): string {
  return [
    "import ctypes",
    "",
    "lib = ctypes.CDLL('libmath.so')",
    "lib.add.argtypes = [ctypes.c_int, ctypes.c_int]",
    "lib.add.restype = ctypes.c_int",
    "",
    "print(lib.add(2, 3))"
  ].join("\n");
}
