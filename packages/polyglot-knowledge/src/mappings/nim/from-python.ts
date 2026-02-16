import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "concurrency.async",
    from: "python",
    to: "nim",
    steps: ["Translate asyncio coroutines to asyncdispatch/Chronos", "Map await to Future[T]"]
  },
  {
    conceptId: "metaprogramming.macros",
    from: "python",
    to: "nim",
    steps: ["Translate decorators/metaclasses to Nim macros", "Use templates for inline expansion"]
  },
  {
    conceptId: "memory.manual",
    from: "python",
    to: "nim",
    steps: ["Introduce explicit allocators for performance hotspots", "Use ARC/ORC or manual allocShared"]
  },
  {
    conceptId: "paradigms.functional",
    from: "python",
    to: "nim",
    steps: ["Translate comprehensions to sequtils map/filter", "Use iterators for lazy sequences"]
  }
];

export function pythonToNim(code: string): TranslationResult {
  return translateWithEngine("python", "nim", code);
}

export const pythonToNimRules = rules;
