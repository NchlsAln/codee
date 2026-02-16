"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToRustRules = void 0;
exports.haskellToRust = haskellToRust;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "paradigms.functional",
        from: "haskell",
        to: "rust",
        steps: ["Translate pure functions to immutable Rust functions", "Use iterators for lazy pipelines"]
    },
    {
        conceptId: "concurrency.stm",
        from: "haskell",
        to: "rust",
        steps: ["Translate STM to channels and locks", "Use tokio::sync primitives for coordination"]
    },
    {
        conceptId: "paradigms.type-classes",
        from: "haskell",
        to: "rust",
        steps: ["Translate type classes to traits", "Use generic bounds for polymorphism"]
    },
    {
        conceptId: "concurrency.channels",
        from: "haskell",
        to: "rust",
        steps: ["Translate TChan/Chan to mpsc channels", "Use async streams for pipelines"]
    }
];
function haskellToRust(code) {
    return (0, translation_engine_1.translateWithEngine)("haskell", "rust", code);
}
exports.haskellToRustRules = rules;
