"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToHaskellRules = void 0;
exports.rustToHaskell = rustToHaskell;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "paradigms.functional",
        from: "rust",
        to: "haskell",
        steps: ["Translate iterator chains to map/filter/fold", "Prefer pure functions and immutable bindings"]
    },
    {
        conceptId: "concurrency.stm",
        from: "rust",
        to: "haskell",
        steps: ["Translate channels to STM channels", "Use atomically for shared state"]
    },
    {
        conceptId: "paradigms.type-classes",
        from: "rust",
        to: "haskell",
        steps: ["Translate traits to type classes", "Use instances for implementations"]
    },
    {
        conceptId: "concurrency.channels",
        from: "rust",
        to: "haskell",
        steps: ["Translate mpsc channels to Chan/TChan", "Use STM for coordination"]
    }
];
function rustToHaskell(code) {
    return (0, translation_engine_1.translateWithEngine)("rust", "haskell", code);
}
exports.rustToHaskellRules = rules;
