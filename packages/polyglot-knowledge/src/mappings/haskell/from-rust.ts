import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "paradigms.functional",
    from: "rust",
    to: "haskell",
    steps: ["Translate iterator chains to map/filter/fold", "Prefer pure functions and immutable bindings"]
  },
  {
    conceptId: "concurrency.stm",
    from: "rust",
    to: "haskell",
    steps: ["Translate channels to STM channels", "Use atomically for shared state"]
  },
  {
    conceptId: "paradigms.type-classes",
    from: "rust",
    to: "haskell",
    steps: ["Translate traits to type classes", "Use instances for implementations"]
  },
  {
    conceptId: "concurrency.channels",
    from: "rust",
    to: "haskell",
    steps: ["Translate mpsc channels to Chan/TChan", "Use STM for coordination"]
  }
];

export function rustToHaskell(code: string): TranslationResult {
  return translateWithEngine("rust", "haskell", code);
}

export const rustToHaskellRules = rules;
