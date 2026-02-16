import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "metaprogramming.macros",
    from: "crystal",
    to: "python",
    steps: ["Translate Crystal macros to decorators or metaclasses", "Use code generation for compile-time behavior"]
  },
  {
    conceptId: "concurrency.fibers",
    from: "crystal",
    to: "python",
    steps: ["Translate fibers to asyncio tasks", "Use async/await and queues for coordination"]
  },
  {
    conceptId: "paradigms.functional",
    from: "crystal",
    to: "python",
    steps: ["Translate blocks to lambdas/callbacks", "Use map/filter comprehensions"]
  },
  {
    conceptId: "systems.ffi",
    from: "crystal",
    to: "python",
    steps: ["Translate lib bindings to ctypes/cffi", "Map structs to ctypes.Structure"]
  }
];

export function crystalToPython(code: string): TranslationResult {
  return translateWithEngine("crystal", "python", code);
}

export const crystalToPythonRules = rules;
