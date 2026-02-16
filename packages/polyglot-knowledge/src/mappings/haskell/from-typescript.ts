import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "paradigms.functional",
    from: "typescript",
    to: "haskell",
    steps: ["Translate array pipelines to map/filter/fold", "Prefer pure functions and immutable data"]
  },
  {
    conceptId: "concurrency.stm",
    from: "typescript",
    to: "haskell",
    steps: ["Translate async queues to STM channels", "Use atomically blocks for coordination"]
  },
  {
    conceptId: "paradigms.type-classes",
    from: "typescript",
    to: "haskell",
    steps: ["Translate interfaces to type classes", "Use instances for polymorphism"]
  },
  {
    conceptId: "concurrency.channels",
    from: "typescript",
    to: "haskell",
    steps: ["Translate RxJS streams to Conduit or Chan", "Use STM for bounded queues"]
  }
];

export function typeScriptToHaskell(code: string): TranslationResult {
  return translateWithEngine("typescript", "haskell", code);
}

export const typeScriptToHaskellRules = rules;
