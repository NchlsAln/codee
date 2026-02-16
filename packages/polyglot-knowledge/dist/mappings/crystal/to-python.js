"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToPythonRules = void 0;
exports.crystalToPython = crystalToPython;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "metaprogramming.macros",
        from: "crystal",
        to: "python",
        steps: ["Translate Crystal macros to decorators or metaclasses", "Use code generation for compile-time behavior"]
    },
    {
        conceptId: "concurrency.fibers",
        from: "crystal",
        to: "python",
        steps: ["Translate fibers to asyncio tasks", "Use async/await and queues for coordination"]
    },
    {
        conceptId: "paradigms.functional",
        from: "crystal",
        to: "python",
        steps: ["Translate blocks to lambdas/callbacks", "Use map/filter comprehensions"]
    },
    {
        conceptId: "systems.ffi",
        from: "crystal",
        to: "python",
        steps: ["Translate lib bindings to ctypes/cffi", "Map structs to ctypes.Structure"]
    }
];
function crystalToPython(code) {
    return (0, translation_engine_1.translateWithEngine)("crystal", "python", code);
}
exports.crystalToPythonRules = rules;
