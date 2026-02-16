"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wasmTemplate = wasmTemplate;
function wasmTemplate() {
    return [
        "export fn add(a: i32, b: i32) i32 {",
        "  return a + b;",
        "}"
    ].join("\n");
}
