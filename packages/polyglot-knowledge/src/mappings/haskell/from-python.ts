import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "paradigms.functional",
    from: "python",
    to: "haskell",
    steps: ["Translate mutable logic to pure functions", "Use map/filter/fold for pipelines"]
  },
  {
    conceptId: "concurrency.stm",
    from: "python",
    to: "haskell",
    steps: ["Translate asyncio queues to STM channels", "Use atomically blocks for coordination"]
  },
  {
    conceptId: "paradigms.type-classes",
    from: "python",
    to: "haskell",
    steps: ["Translate protocols/ABCs to type classes", "Use instances for polymorphism"]
  },
  {
    conceptId: "concurrency.channels",
    from: "python",
    to: "haskell",
    steps: ["Translate queue-based pipelines to Chan/TChan", "Use STM for backpressure"]
  }
];

export function pythonToHaskell(code: string): TranslationResult {
  return translateWithEngine("python", "haskell", code);
}

export const pythonToHaskellRules = rules;
