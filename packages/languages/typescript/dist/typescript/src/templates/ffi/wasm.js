"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiWasmTemplate = ffiWasmTemplate;
function ffiWasmTemplate() {
    return [
        "const moduleBytes = await fetch('add.wasm').then((res) => res.arrayBuffer());",
        "const { instance } = await WebAssembly.instantiate(moduleBytes);",
        "const add = instance.exports.add as (a: number, b: number) => number;",
        "",
        "console.log(add(2, 3));"
    ].join("\n");
}
