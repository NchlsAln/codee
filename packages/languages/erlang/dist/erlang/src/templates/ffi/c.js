"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiCTemplate = ffiCTemplate;
function ffiCTemplate() {
    return [
        "-module(nif_demo).",
        "-on_load(init/0).",
        "-export([init/0, add/2]).",
        "init() -> erlang:load_nif(\"./nif_demo\", 0).",
        "add(_, _) -> erlang:nif_error(nif_not_loaded)."
    ].join("\n");
}
