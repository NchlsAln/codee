"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiWasmTemplate = ffiWasmTemplate;
function ffiWasmTemplate() {
    return [
        "from wasmtime import Engine, Store, Module, Instance",
        "",
        "engine = Engine()",
        "store = Store(engine)",
        "module = Module.from_file(engine, 'add.wasm')",
        "instance = Instance(store, module, [])",
        "add = instance.exports(store)['add']",
        "print(add(store, 2, 3))"
    ].join("\n");
}
