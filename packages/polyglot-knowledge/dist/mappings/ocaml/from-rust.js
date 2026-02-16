"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToOcamlRules = void 0;
exports.rustToOcaml = rustToOcaml;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "paradigms.functional",
        from: "rust",
        to: "ocaml",
        steps: ["Translate match expressions to pattern matching", "Use immutable bindings and lists"]
    },
    {
        conceptId: "concurrency.async",
        from: "rust",
        to: "ocaml",
        steps: ["Translate tokio async to Lwt/Async", "Map Future combinators to bind chains"]
    },
    {
        conceptId: "modules.functors",
        from: "rust",
        to: "ocaml",
        steps: ["Translate modules/crates to OCaml modules", "Map generics to functors"]
    },
    {
        conceptId: "data-structures.variants",
        from: "rust",
        to: "ocaml",
        steps: ["Translate enums to variants", "Use ADTs for domain modeling"]
    }
];
function rustToOcaml(code) {
    return (0, translation_engine_1.translateWithEngine)("rust", "ocaml", code);
}
exports.rustToOcamlRules = rules;
