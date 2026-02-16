"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToRustRules = void 0;
exports.ocamlToRust = ocamlToRust;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "paradigms.functional",
        from: "ocaml",
        to: "rust",
        steps: ["Translate pattern matching to match", "Use immutable bindings and iterators"]
    },
    {
        conceptId: "concurrency.async",
        from: "ocaml",
        to: "rust",
        steps: ["Translate Lwt/Async to tokio async/await", "Map promises to Future"]
    },
    {
        conceptId: "modules.functors",
        from: "ocaml",
        to: "rust",
        steps: ["Translate modules to crates/modules", "Map functors to generic functions"]
    },
    {
        conceptId: "data-structures.variants",
        from: "ocaml",
        to: "rust",
        steps: ["Translate variants to enums", "Use data-carrying enums for ADTs"]
    }
];
function ocamlToRust(code) {
    return (0, translation_engine_1.translateWithEngine)("ocaml", "rust", code);
}
exports.ocamlToRustRules = rules;
