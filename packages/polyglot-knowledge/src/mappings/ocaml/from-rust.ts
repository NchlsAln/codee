import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
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

export function rustToOcaml(code: string): TranslationResult {
  return translateWithEngine("rust", "ocaml", code);
}

export const rustToOcamlRules = rules;
