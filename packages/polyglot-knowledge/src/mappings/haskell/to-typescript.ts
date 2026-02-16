import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "paradigms.functional",
    from: "haskell",
    to: "typescript",
    steps: ["Translate pure functions to functional utilities", "Use array methods or fp-ts for functional style"]
  },
  {
    conceptId: "concurrency.stm",
    from: "haskell",
    to: "typescript",
    steps: ["Translate STM to RxJS streams or async queues", "Map atomically blocks to locked sections"]
  },
  {
    conceptId: "paradigms.type-classes",
    from: "haskell",
    to: "typescript",
    steps: ["Translate type classes to interfaces", "Use generics for polymorphism"]
  },
  {
    conceptId: "concurrency.channels",
    from: "haskell",
    to: "typescript",
    steps: ["Translate TChan/Chan to RxJS Subject or async queues", "Use async iterators for streams"]
  }
];

export function haskellToTypeScript(code: string): TranslationResult {
  return translateWithEngine("haskell", "typescript", code);
}

export const haskellToTypeScriptRules = rules;
