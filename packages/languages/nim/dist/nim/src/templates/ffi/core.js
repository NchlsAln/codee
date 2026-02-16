"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiTemplate = ffiTemplate;
function ffiTemplate() {
    return [
        "proc c_abs(x: cint): cint {.importc: \"abs\", header: \"stdlib.h\".}",
        "let v = c_abs(-3)",
        "const lib = loadLib(\"libm.so\")",
        "discard v; discard lib"
    ].join("\n");
}
