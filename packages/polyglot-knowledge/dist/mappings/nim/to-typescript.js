"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToTypeScriptRules = void 0;
exports.nimToTypeScript = nimToTypeScript;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "concurrency.async",
        from: "nim",
        to: "typescript",
        steps: ["Translate asyncdispatch/Chronos to Promises and async/await", "Map Future[T] to Promise<T>"]
    },
    {
        conceptId: "metaprogramming.macros",
        from: "nim",
        to: "typescript",
        steps: ["Translate macros/templates to decorators or build-time codegen", "Use TS transformers if needed"]
    },
    {
        conceptId: "memory.manual",
        from: "nim",
        to: "typescript",
        steps: ["Translate ARC/ORC semantics to GC-managed objects", "Use ArrayBuffer for manual byte control"]
    },
    {
        conceptId: "paradigms.functional",
        from: "nim",
        to: "typescript",
        steps: ["Translate sequtils map/filter to array methods", "Use iterators for lazy sequences"]
    }
];
function nimToTypeScript(code) {
    return (0, translation_engine_1.translateWithEngine)("nim", "typescript", code);
}
exports.nimToTypeScriptRules = rules;
