"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToNimRules = void 0;
exports.rustToNim = rustToNim;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "concurrency.async",
        from: "rust",
        to: "nim",
        steps: ["Translate tokio async/await to asyncdispatch/Chronos", "Map channels to async queues"]
    },
    {
        conceptId: "metaprogramming.macros",
        from: "rust",
        to: "nim",
        steps: ["Translate procedural macros to Nim macros", "Use templates for inlining"]
    },
    {
        conceptId: "memory.manual",
        from: "rust",
        to: "nim",
        steps: ["Translate ownership to ARC/ORC or explicit allocators", "Use defer for cleanup"]
    },
    {
        conceptId: "paradigms.functional",
        from: "rust",
        to: "nim",
        steps: ["Translate iterator chains to sequtils", "Use iterators for lazy flows"]
    }
];
function rustToNim(code) {
    return (0, translation_engine_1.translateWithEngine)("rust", "nim", code);
}
exports.rustToNimRules = rules;
