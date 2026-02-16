"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiWasmTemplate = ffiWasmTemplate;
function ffiWasmTemplate() {
    return [
        "<?php",
        "// Example placeholder for WASM interop via a runtime extension",
        "$module = 'math.wasm';",
        "echo $module;"
    ].join("\n");
}
