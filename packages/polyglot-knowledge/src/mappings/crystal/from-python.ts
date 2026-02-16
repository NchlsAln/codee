import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "metaprogramming.macros",
    from: "python",
    to: "crystal",
    steps: ["Translate decorators/metaclasses to Crystal macros", "Use macro-generated methods"]
  },
  {
    conceptId: "concurrency.fibers",
    from: "python",
    to: "crystal",
    steps: ["Translate asyncio to fibers", "Use channels for synchronization"]
  },
  {
    conceptId: "paradigms.functional",
    from: "python",
    to: "crystal",
    steps: ["Translate comprehensions to map/select", "Use blocks for iteration"]
  },
  {
    conceptId: "systems.ffi",
    from: "python",
    to: "crystal",
    steps: ["Translate ctypes/cffi to lib bindings", "Use struct declarations for C ABI"]
  }
];

export function pythonToCrystal(code: string): TranslationResult {
  return translateWithEngine("python", "crystal", code);
}

export const pythonToCrystalRules = rules;
