"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToTypeScriptRules = void 0;
exports.ocamlToTypeScript = ocamlToTypeScript;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "paradigms.functional",
        from: "ocaml",
        to: "typescript",
        steps: ["Translate pattern matching to switch or if/else", "Use immutable data structures where possible"]
    },
    {
        conceptId: "concurrency.async",
        from: "ocaml",
        to: "typescript",
        steps: ["Translate Lwt/Async to Promises and async/await", "Map futures to Promise<T>"]
    },
    {
        conceptId: "modules.functors",
        from: "ocaml",
        to: "typescript",
        steps: ["Translate modules to ES modules", "Map functors to higher-order factories"]
    },
    {
        conceptId: "data-structures.variants",
        from: "ocaml",
        to: "typescript",
        steps: ["Translate variants to discriminated unions", "Use tagged objects"]
    }
];
function ocamlToTypeScript(code) {
    return (0, translation_engine_1.translateWithEngine)("ocaml", "typescript", code);
}
exports.ocamlToTypeScriptRules = rules;
