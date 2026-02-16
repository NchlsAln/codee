"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToRustRules = void 0;
exports.crystalToRust = crystalToRust;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "metaprogramming.macros",
        from: "crystal",
        to: "rust",
        steps: ["Translate Crystal macros to Rust macros", "Use build.rs for compile-time codegen"]
    },
    {
        conceptId: "concurrency.fibers",
        from: "crystal",
        to: "rust",
        steps: ["Translate fibers to async tasks", "Use tokio and channels for coordination"]
    },
    {
        conceptId: "paradigms.functional",
        from: "crystal",
        to: "rust",
        steps: ["Translate blocks to closures", "Use iterator chains for collection pipelines"]
    },
    {
        conceptId: "systems.ffi",
        from: "crystal",
        to: "rust",
        steps: ["Translate lib bindings to extern blocks", "Use #[repr(C)] for structs"]
    }
];
function crystalToRust(code) {
    return (0, translation_engine_1.translateWithEngine)("crystal", "rust", code);
}
exports.crystalToRustRules = rules;
