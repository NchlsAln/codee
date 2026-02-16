"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctypesTemplate = ctypesTemplate;
function ctypesTemplate() {
    return [
        "open Ctypes",
        "open Foreign",
        "let puts = foreign \"puts\" (string @-> returning int)",
        "let () = ignore (puts \"hi\")"
    ].join("\n");
}
