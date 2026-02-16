"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiTemplate = ffiTemplate;
function ffiTemplate() {
    return [
        "open Ctypes",
        "open Foreign",
        "let abs_int = foreign \"abs\" (int @-> returning int)",
        "let _ = abs_int (-3)"
    ].join("\n");
}
