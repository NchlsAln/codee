import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
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

export function ocamlToPython(code: string): TranslationResult {
  return translateWithEngine("ocaml", "python", code);
}

export const ocamlToPythonRules = rules;
