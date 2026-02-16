"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToPythonRules = void 0;
exports.haskellToPython = haskellToPython;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "paradigms.functional",
        from: "haskell",
        to: "python",
        steps: ["Translate pure functions to pure Python functions", "Use itertools for lazy pipelines"]
    },
    {
        conceptId: "concurrency.stm",
        from: "haskell",
        to: "python",
        steps: ["Translate STM to asyncio queues and locks", "Map atomically blocks to async critical sections"]
    },
    {
        conceptId: "paradigms.type-classes",
        from: "haskell",
        to: "python",
        steps: ["Translate type classes to protocols or ABCs", "Use duck-typed interfaces"]
    },
    {
        conceptId: "concurrency.channels",
        from: "haskell",
        to: "python",
        steps: ["Translate TChan/Chan to asyncio.Queue", "Use async tasks for producers/consumers"]
    }
];
function haskellToPython(code) {
    return (0, translation_engine_1.translateWithEngine)("haskell", "python", code);
}
exports.haskellToPythonRules = rules;
