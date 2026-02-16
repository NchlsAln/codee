"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemsTemplate = systemsTemplate;
function systemsTemplate() {
    return [
        "open Unix",
        "let stats = Gc.stat ()",
        "let home = try getenv \"HOME\" with Not_found -> \"\"",
        "let () = ignore (stats, home)",
        "open Ctypes",
        "open Foreign",
        "let strlen = foreign \"strlen\" (string @-> returning size_t)",
        "let _ = strlen \"hi\""
    ].join("\n");
}
