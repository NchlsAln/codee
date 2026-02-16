"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToPythonRules = void 0;
exports.ocamlToPython = ocamlToPython;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "paradigms.functional",
        from: "ocaml",
        to: "python",
        steps: ["Translate pattern matching to if/elif or match", "Prefer immutable data structures"]
    },
    {
        conceptId: "concurrency.async",
        from: "ocaml",
        to: "python",
        steps: ["Translate Lwt/Async to asyncio", "Map promises to awaitable coroutines"]
    },
    {
        conceptId: "modules.functors",
        from: "ocaml",
        to: "python",
        steps: ["Translate modules to packages", "Map functors to higher-order factories"]
    },
    {
        conceptId: "data-structures.variants",
        from: "ocaml",
        to: "python",
        steps: ["Translate variants to dataclasses or enums", "Use tagged unions with typing.Union"]
    }
];
function ocamlToPython(code) {
    return (0, translation_engine_1.translateWithEngine)("ocaml", "python", code);
}
exports.ocamlToPythonRules = rules;
