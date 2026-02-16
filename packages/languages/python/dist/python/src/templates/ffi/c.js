"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiCTemplate = ffiCTemplate;
function ffiCTemplate() {
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
