"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiWasmTemplate = ffiWasmTemplate;
function ffiWasmTemplate() {
    return [
        "# Example placeholder for WASM via a runtime gem",
        "module_path = 'math.wasm'",
        "puts module_path"
    ].join("\n");
}
