"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeScriptToNimRules = void 0;
exports.typeScriptToNim = typeScriptToNim;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "concurrency.async",
        from: "typescript",
        to: "nim",
        steps: ["Translate Promises to Future[T]", "Map async/await to asyncdispatch/Chronos"]
    },
    {
        conceptId: "metaprogramming.macros",
        from: "typescript",
        to: "nim",
        steps: ["Translate decorators to macros/templates", "Use compile-time AST transforms"]
    },
    {
        conceptId: "memory.manual",
        from: "typescript",
        to: "nim",
        steps: ["Introduce explicit allocators for buffers", "Use ARC/ORC for deterministic cleanup"]
    },
    {
        conceptId: "paradigms.functional",
        from: "typescript",
        to: "nim",
        steps: ["Translate array map/filter to sequtils", "Use iterators for streaming"]
    }
];
function typeScriptToNim(code) {
    return (0, translation_engine_1.translateWithEngine)("typescript", "nim", code);
}
exports.typeScriptToNimRules = rules;
