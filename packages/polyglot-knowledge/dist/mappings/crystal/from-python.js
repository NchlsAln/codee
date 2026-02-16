"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToCrystalRules = void 0;
exports.pythonToCrystal = pythonToCrystal;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "metaprogramming.macros",
        from: "python",
        to: "crystal",
        steps: ["Translate decorators/metaclasses to Crystal macros", "Use macro-generated methods"]
    },
    {
        conceptId: "concurrency.fibers",
        from: "python",
        to: "crystal",
        steps: ["Translate asyncio to fibers", "Use channels for synchronization"]
    },
    {
        conceptId: "paradigms.functional",
        from: "python",
        to: "crystal",
        steps: ["Translate comprehensions to map/select", "Use blocks for iteration"]
    },
    {
        conceptId: "systems.ffi",
        from: "python",
        to: "crystal",
        steps: ["Translate ctypes/cffi to lib bindings", "Use struct declarations for C ABI"]
    }
];
function pythonToCrystal(code) {
    return (0, translation_engine_1.translateWithEngine)("python", "crystal", code);
}
exports.pythonToCrystalRules = rules;
