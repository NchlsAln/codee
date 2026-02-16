"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToOcamlRules = void 0;
exports.pythonToOcaml = pythonToOcaml;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "paradigms.functional",
        from: "python",
        to: "ocaml",
        steps: ["Translate Python control flow to pattern matching", "Prefer immutable bindings"]
    },
    {
        conceptId: "concurrency.async",
        from: "python",
        to: "ocaml",
        steps: ["Translate asyncio to Lwt/Async", "Map async functions to promises"]
    },
    {
        conceptId: "modules.functors",
        from: "python",
        to: "ocaml",
        steps: ["Translate packages to modules", "Map factories to functors"]
    },
    {
        conceptId: "data-structures.variants",
        from: "python",
        to: "ocaml",
        steps: ["Translate tagged dicts to variants", "Use algebraic data types for domain modeling"]
    }
];
function pythonToOcaml(code) {
    return (0, translation_engine_1.translateWithEngine)("python", "ocaml", code);
}
exports.pythonToOcamlRules = rules;
