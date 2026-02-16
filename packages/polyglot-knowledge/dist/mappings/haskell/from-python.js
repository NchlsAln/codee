"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToHaskellRules = void 0;
exports.pythonToHaskell = pythonToHaskell;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "paradigms.functional",
        from: "python",
        to: "haskell",
        steps: ["Translate mutable logic to pure functions", "Use map/filter/fold for pipelines"]
    },
    {
        conceptId: "concurrency.stm",
        from: "python",
        to: "haskell",
        steps: ["Translate asyncio queues to STM channels", "Use atomically blocks for coordination"]
    },
    {
        conceptId: "paradigms.type-classes",
        from: "python",
        to: "haskell",
        steps: ["Translate protocols/ABCs to type classes", "Use instances for polymorphism"]
    },
    {
        conceptId: "concurrency.channels",
        from: "python",
        to: "haskell",
        steps: ["Translate queue-based pipelines to Chan/TChan", "Use STM for backpressure"]
    }
];
function pythonToHaskell(code) {
    return (0, translation_engine_1.translateWithEngine)("python", "haskell", code);
}
exports.pythonToHaskellRules = rules;
