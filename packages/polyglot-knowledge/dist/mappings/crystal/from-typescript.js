"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeScriptToCrystalRules = void 0;
exports.typeScriptToCrystal = typeScriptToCrystal;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "metaprogramming.macros",
        from: "typescript",
        to: "crystal",
        steps: ["Translate decorators to Crystal macros", "Use macro expansions for boilerplate"]
    },
    {
        conceptId: "concurrency.fibers",
        from: "typescript",
        to: "crystal",
        steps: ["Translate Promises to fibers", "Use channels for coordination"]
    },
    {
        conceptId: "paradigms.functional",
        from: "typescript",
        to: "crystal",
        steps: ["Translate array map/filter to map/select", "Use blocks for iteration"]
    },
    {
        conceptId: "systems.ffi",
        from: "typescript",
        to: "crystal",
        steps: ["Translate N-API/FFI to lib bindings", "Use C ABI struct definitions"]
    }
];
function typeScriptToCrystal(code) {
    return (0, translation_engine_1.translateWithEngine)("typescript", "crystal", code);
}
exports.typeScriptToCrystalRules = rules;
