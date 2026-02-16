import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
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

export function ocamlToTypeScript(code: string): TranslationResult {
  return translateWithEngine("ocaml", "typescript", code);
}

export const ocamlToTypeScriptRules = rules;
