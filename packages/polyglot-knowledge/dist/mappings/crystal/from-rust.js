"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToCrystalRules = void 0;
exports.rustToCrystal = rustToCrystal;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "metaprogramming.macros",
        from: "rust",
        to: "crystal",
        steps: ["Translate Rust macros to Crystal macros", "Use macro expansions for boilerplate"]
    },
    {
        conceptId: "concurrency.fibers",
        from: "rust",
        to: "crystal",
        steps: ["Translate async tasks to fibers", "Use channels for message passing"]
    },
    {
        conceptId: "paradigms.functional",
        from: "rust",
        to: "crystal",
        steps: ["Translate iterator chains to map/select", "Use blocks for closures"]
    },
    {
        conceptId: "systems.ffi",
        from: "rust",
        to: "crystal",
        steps: ["Translate extern blocks to lib bindings", "Map #[repr(C)] structs to Crystal structs"]
    }
];
function rustToCrystal(code) {
    return (0, translation_engine_1.translateWithEngine)("rust", "crystal", code);
}
exports.rustToCrystalRules = rules;
