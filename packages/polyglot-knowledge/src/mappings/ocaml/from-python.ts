import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
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

export function pythonToOcaml(code: string): TranslationResult {
  return translateWithEngine("python", "ocaml", code);
}

export const pythonToOcamlRules = rules;
