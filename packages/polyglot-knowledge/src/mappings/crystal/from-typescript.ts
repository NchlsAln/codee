import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "metaprogramming.macros",
    from: "typescript",
    to: "crystal",
    steps: ["Translate decorators to Crystal macros", "Use macro expansions for boilerplate"]
  },
  {
    conceptId: "concurrency.fibers",
    from: "typescript",
    to: "crystal",
    steps: ["Translate Promises to fibers", "Use channels for coordination"]
  },
  {
    conceptId: "paradigms.functional",
    from: "typescript",
    to: "crystal",
    steps: ["Translate array map/filter to map/select", "Use blocks for iteration"]
  },
  {
    conceptId: "systems.ffi",
    from: "typescript",
    to: "crystal",
    steps: ["Translate N-API/FFI to lib bindings", "Use C ABI struct definitions"]
  }
];

export function typeScriptToCrystal(code: string): TranslationResult {
  return translateWithEngine("typescript", "crystal", code);
}

export const typeScriptToCrystalRules = rules;
