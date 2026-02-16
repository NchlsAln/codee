"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeScriptToHaskellRules = void 0;
exports.typeScriptToHaskell = typeScriptToHaskell;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "paradigms.functional",
        from: "typescript",
        to: "haskell",
        steps: ["Translate array pipelines to map/filter/fold", "Prefer pure functions and immutable data"]
    },
    {
        conceptId: "concurrency.stm",
        from: "typescript",
        to: "haskell",
        steps: ["Translate async queues to STM channels", "Use atomically blocks for coordination"]
    },
    {
        conceptId: "paradigms.type-classes",
        from: "typescript",
        to: "haskell",
        steps: ["Translate interfaces to type classes", "Use instances for polymorphism"]
    },
    {
        conceptId: "concurrency.channels",
        from: "typescript",
        to: "haskell",
        steps: ["Translate RxJS streams to Conduit or Chan", "Use STM for bounded queues"]
    }
];
function typeScriptToHaskell(code) {
    return (0, translation_engine_1.translateWithEngine)("typescript", "haskell", code);
}
exports.typeScriptToHaskellRules = rules;
