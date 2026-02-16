import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "concurrency.async",
    from: "nim",
    to: "python",
    steps: ["Translate asyncdispatch/Chronos to asyncio", "Map Future[T] to awaitable coroutines"]
  },
  {
    conceptId: "metaprogramming.macros",
    from: "nim",
    to: "python",
    steps: ["Translate macros/templates to decorators or metaclasses", "Use AST transforms via ast module where needed"]
  },
  {
    conceptId: "memory.manual",
    from: "nim",
    to: "python",
    steps: ["Translate ARC/ORC semantics to GC-managed objects", "Remove explicit allocation calls"]
  },
  {
    conceptId: "paradigms.functional",
    from: "nim",
    to: "python",
    steps: ["Translate sequtils map/filter to comprehensions", "Use itertools for lazy pipelines"]
  }
];

export function nimToPython(code: string): TranslationResult {
  return translateWithEngine("nim", "python", code);
}

export const nimToPythonRules = rules;
