import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "concurrency.async",
    from: "nim",
    to: "rust",
    steps: ["Translate asyncdispatch/Chronos to tokio async/await", "Map Future[T] to Future<Output=T>"]
  },
  {
    conceptId: "metaprogramming.macros",
    from: "nim",
    to: "rust",
    steps: ["Translate Nim macros to procedural macros", "Use build.rs for code generation"]
  },
  {
    conceptId: "memory.manual",
    from: "nim",
    to: "rust",
    steps: ["Translate ARC/ORC to ownership and borrowing", "Use Drop for cleanup"]
  },
  {
    conceptId: "paradigms.functional",
    from: "nim",
    to: "rust",
    steps: ["Translate sequtils map/filter to iterator chains", "Use fold for reductions"]
  }
];

export function nimToRust(code: string): TranslationResult {
  return translateWithEngine("nim", "rust", code);
}

export const nimToRustRules = rules;
