import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
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

export function ocamlToRust(code: string): TranslationResult {
  return translateWithEngine("ocaml", "rust", code);
}

export const ocamlToRustRules = rules;
