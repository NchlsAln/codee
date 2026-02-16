"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToNimRules = void 0;
exports.pythonToNim = pythonToNim;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "concurrency.async",
        from: "python",
        to: "nim",
        steps: ["Translate asyncio coroutines to asyncdispatch/Chronos", "Map await to Future[T]"]
    },
    {
        conceptId: "metaprogramming.macros",
        from: "python",
        to: "nim",
        steps: ["Translate decorators/metaclasses to Nim macros", "Use templates for inline expansion"]
    },
    {
        conceptId: "memory.manual",
        from: "python",
        to: "nim",
        steps: ["Introduce explicit allocators for performance hotspots", "Use ARC/ORC or manual allocShared"]
    },
    {
        conceptId: "paradigms.functional",
        from: "python",
        to: "nim",
        steps: ["Translate comprehensions to sequtils map/filter", "Use iterators for lazy sequences"]
    }
];
function pythonToNim(code) {
    return (0, translation_engine_1.translateWithEngine)("python", "nim", code);
}
exports.pythonToNimRules = rules;
