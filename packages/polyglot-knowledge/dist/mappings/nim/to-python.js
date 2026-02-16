"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToPythonRules = void 0;
exports.nimToPython = nimToPython;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "concurrency.async",
        from: "nim",
        to: "python",
        steps: ["Translate asyncdispatch/Chronos to asyncio", "Map Future[T] to awaitable coroutines"]
    },
    {
        conceptId: "metaprogramming.macros",
        from: "nim",
        to: "python",
        steps: ["Translate macros/templates to decorators or metaclasses", "Use AST transforms via ast module where needed"]
    },
    {
        conceptId: "memory.manual",
        from: "nim",
        to: "python",
        steps: ["Translate ARC/ORC semantics to GC-managed objects", "Remove explicit allocation calls"]
    },
    {
        conceptId: "paradigms.functional",
        from: "nim",
        to: "python",
        steps: ["Translate sequtils map/filter to comprehensions", "Use itertools for lazy pipelines"]
    }
];
function nimToPython(code) {
    return (0, translation_engine_1.translateWithEngine)("nim", "python", code);
}
exports.nimToPythonRules = rules;
