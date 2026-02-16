"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiWasmTemplate = ffiWasmTemplate;
function ffiWasmTemplate() {
    return [
        "{:ok, instance} = Wasmex.start_link('math.wasm')",
        "IO.inspect(instance)"
    ].join("\n");
}
