import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
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

export function typeScriptToOcaml(code: string): TranslationResult {
  return translateWithEngine("typescript", "ocaml", code);
}

export const typeScriptToOcamlRules = rules;
