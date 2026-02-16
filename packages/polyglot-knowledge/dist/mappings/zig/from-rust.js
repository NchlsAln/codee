"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToZigRules = void 0;
exports.rustToZig = rustToZig;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "memory.manual",
        from: "rust",
        to: "zig",
        steps: ["Translate ownership/borrowing to explicit allocators", "Use defer/errdefer for cleanup"]
    },
    {
        conceptId: "metaprogramming.compile-time",
        from: "rust",
        to: "zig",
        steps: ["Translate procedural macros to comptime", "Use inline for and comptime parameters"]
    },
    {
        conceptId: "concurrency.channels",
        from: "rust",
        to: "zig",
        steps: ["Translate channels to explicit queues", "Use std.Thread or async for concurrency"]
    },
    {
        conceptId: "systems.ffi",
        from: "rust",
        to: "zig",
        steps: ["Translate extern blocks to @cImport", "Use packed structs for ABI compatibility"]
    }
];
function rustToZig(code) {
    return (0, translation_engine_1.translateWithEngine)("rust", "zig", code);
}
exports.rustToZigRules = rules;
