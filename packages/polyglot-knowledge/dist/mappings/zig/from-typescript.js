"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeScriptToZigRules = void 0;
exports.typeScriptToZig = typeScriptToZig;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "memory.manual",
        from: "typescript",
        to: "zig",
        steps: ["Introduce explicit allocators for buffers", "Replace GC semantics with allocator-managed memory"]
    },
    {
        conceptId: "metaprogramming.compile-time",
        from: "typescript",
        to: "zig",
        steps: ["Translate TS decorators/metadata to comptime logic", "Use build steps for code generation"]
    },
    {
        conceptId: "concurrency.channels",
        from: "typescript",
        to: "zig",
        steps: ["Translate Promises/Workers to std.Thread", "Use channels for message passing"]
    },
    {
        conceptId: "systems.ffi",
        from: "typescript",
        to: "zig",
        steps: ["Translate N-API/FFI to @cImport", "Use explicit C ABI layouts"]
    }
];
function typeScriptToZig(code) {
    return (0, translation_engine_1.translateWithEngine)("typescript", "zig", code);
}
exports.typeScriptToZigRules = rules;
