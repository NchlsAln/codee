import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "concurrency.async",
    from: "rust",
    to: "nim",
    steps: ["Translate tokio async/await to asyncdispatch/Chronos", "Map channels to async queues"]
  },
  {
    conceptId: "metaprogramming.macros",
    from: "rust",
    to: "nim",
    steps: ["Translate procedural macros to Nim macros", "Use templates for inlining"]
  },
  {
    conceptId: "memory.manual",
    from: "rust",
    to: "nim",
    steps: ["Translate ownership to ARC/ORC or explicit allocators", "Use defer for cleanup"]
  },
  {
    conceptId: "paradigms.functional",
    from: "rust",
    to: "nim",
    steps: ["Translate iterator chains to sequtils", "Use iterators for lazy flows"]
  }
];

export function rustToNim(code: string): TranslationResult {
  return translateWithEngine("rust", "nim", code);
}

export const rustToNimRules = rules;
