"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiWasmTemplate = ffiWasmTemplate;
function ffiWasmTemplate() {
    return [
        "-module(wasm_demo).",
        "-export([run/0]).",
        "run() ->",
        "  %% Placeholder for WASM via port",
        "  ok."
    ].join("\n");
}
