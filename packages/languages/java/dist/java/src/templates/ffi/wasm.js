"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiWasmTemplate = ffiWasmTemplate;
function ffiWasmTemplate() {
    return "public class WasmSample {\n  public static void main(String[] args) {\n    System.out.println(\"Use GraalVM WASM to run .wasm modules\");\n  }\n}\n";
}
