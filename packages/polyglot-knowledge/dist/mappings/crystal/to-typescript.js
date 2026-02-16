"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToTypeScriptRules = void 0;
exports.crystalToTypeScript = crystalToTypeScript;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "metaprogramming.macros",
        from: "crystal",
        to: "typescript",
        steps: ["Translate Crystal macros to decorators or build-time codegen", "Use TS transformers where needed"]
    },
    {
        conceptId: "concurrency.fibers",
        from: "crystal",
        to: "typescript",
        steps: ["Translate fibers to async/await or worker threads", "Use Promises for scheduling"]
    },
    {
        conceptId: "paradigms.functional",
        from: "crystal",
        to: "typescript",
        steps: ["Translate blocks to callbacks", "Use array map/filter for collection pipelines"]
    },
    {
        conceptId: "systems.ffi",
        from: "crystal",
        to: "typescript",
        steps: ["Translate lib bindings to N-API/FFI", "Use buffer views for struct layouts"]
    }
];
function crystalToTypeScript(code) {
    return (0, translation_engine_1.translateWithEngine)("crystal", "typescript", code);
}
exports.crystalToTypeScriptRules = rules;
