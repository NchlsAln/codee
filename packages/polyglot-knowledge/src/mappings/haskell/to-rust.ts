import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "paradigms.functional",
    from: "haskell",
    to: "rust",
    steps: ["Translate pure functions to immutable Rust functions", "Use iterators for lazy pipelines"]
  },
  {
    conceptId: "concurrency.stm",
    from: "haskell",
    to: "rust",
    steps: ["Translate STM to channels and locks", "Use tokio::sync primitives for coordination"]
  },
  {
    conceptId: "paradigms.type-classes",
    from: "haskell",
    to: "rust",
    steps: ["Translate type classes to traits", "Use generic bounds for polymorphism"]
  },
  {
    conceptId: "concurrency.channels",
    from: "haskell",
    to: "rust",
    steps: ["Translate TChan/Chan to mpsc channels", "Use async streams for pipelines"]
  }
];

export function haskellToRust(code: string): TranslationResult {
  return translateWithEngine("haskell", "rust", code);
}

export const haskellToRustRules = rules;
