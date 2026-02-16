"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToTypeScriptRules = void 0;
exports.haskellToTypeScript = haskellToTypeScript;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "paradigms.functional",
        from: "haskell",
        to: "typescript",
        steps: ["Translate pure functions to functional utilities", "Use array methods or fp-ts for functional style"]
    },
    {
        conceptId: "concurrency.stm",
        from: "haskell",
        to: "typescript",
        steps: ["Translate STM to RxJS streams or async queues", "Map atomically blocks to locked sections"]
    },
    {
        conceptId: "paradigms.type-classes",
        from: "haskell",
        to: "typescript",
        steps: ["Translate type classes to interfaces", "Use generics for polymorphism"]
    },
    {
        conceptId: "concurrency.channels",
        from: "haskell",
        to: "typescript",
        steps: ["Translate TChan/Chan to RxJS Subject or async queues", "Use async iterators for streams"]
    }
];
function haskellToTypeScript(code) {
    return (0, translation_engine_1.translateWithEngine)("haskell", "typescript", code);
}
exports.haskellToTypeScriptRules = rules;
