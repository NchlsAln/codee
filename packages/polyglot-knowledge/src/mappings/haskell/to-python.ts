import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "paradigms.functional",
    from: "haskell",
    to: "python",
    steps: ["Translate pure functions to pure Python functions", "Use itertools for lazy pipelines"]
  },
  {
    conceptId: "concurrency.stm",
    from: "haskell",
    to: "python",
    steps: ["Translate STM to asyncio queues and locks", "Map atomically blocks to async critical sections"]
  },
  {
    conceptId: "paradigms.type-classes",
    from: "haskell",
    to: "python",
    steps: ["Translate type classes to protocols or ABCs", "Use duck-typed interfaces"]
  },
  {
    conceptId: "concurrency.channels",
    from: "haskell",
    to: "python",
    steps: ["Translate TChan/Chan to asyncio.Queue", "Use async tasks for producers/consumers"]
  }
];

export function haskellToPython(code: string): TranslationResult {
  return translateWithEngine("haskell", "python", code);
}

export const haskellToPythonRules = rules;
