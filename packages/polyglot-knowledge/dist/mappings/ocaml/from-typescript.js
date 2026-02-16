"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeScriptToOcamlRules = void 0;
exports.typeScriptToOcaml = typeScriptToOcaml;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "paradigms.functional",
        from: "typescript",
        to: "ocaml",
        steps: ["Translate array pipelines to List.map/filter", "Use pattern matching for unions"]
    },
    {
        conceptId: "concurrency.async",
        from: "typescript",
        to: "ocaml",
        steps: ["Translate Promises to Lwt/Async", "Map async/await to bind/let* chains"]
    },
    {
        conceptId: "modules.functors",
        from: "typescript",
        to: "ocaml",
        steps: ["Translate ES modules to OCaml modules", "Map factory functions to functors"]
    },
    {
        conceptId: "data-structures.variants",
        from: "typescript",
        to: "ocaml",
        steps: ["Translate discriminated unions to variants", "Use pattern matching for cases"]
    }
];
function typeScriptToOcaml(code) {
    return (0, translation_engine_1.translateWithEngine)("typescript", "ocaml", code);
}
exports.typeScriptToOcamlRules = rules;
