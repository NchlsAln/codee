"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToZigRules = void 0;
exports.pythonToZig = pythonToZig;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "memory.manual",
        from: "python",
        to: "zig",
        steps: ["Introduce explicit allocators for collections", "Replace GC-managed objects with allocator-owned memory"]
    },
    {
        conceptId: "metaprogramming.compile-time",
        from: "python",
        to: "zig",
        steps: ["Translate dynamic code generation to comptime", "Use inline for and comptime parameters"]
    },
    {
        conceptId: "concurrency.channels",
        from: "python",
        to: "zig",
        steps: ["Translate asyncio queues to channel/message patterns", "Use std.Thread for parallelism"]
    },
    {
        conceptId: "systems.ffi",
        from: "python",
        to: "zig",
        steps: ["Translate ctypes/cffi to @cImport bindings", "Use packed structs for C ABI"]
    }
];
function pythonToZig(code) {
    return (0, translation_engine_1.translateWithEngine)("python", "zig", code);
}
exports.pythonToZigRules = rules;
