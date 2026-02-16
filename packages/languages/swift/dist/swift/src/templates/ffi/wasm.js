"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiWasmTemplate = ffiWasmTemplate;
function ffiWasmTemplate() {
    return [
        "import JavaScriptKit",
        "",
        "let global = JSObject.global",
        "let result = global.Math.function?.callAsFunction(global.Math.object, 1, 2)",
        "print(result?.number ?? 0)"
    ].join("\n");
}
