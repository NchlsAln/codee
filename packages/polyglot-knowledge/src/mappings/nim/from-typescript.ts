import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "concurrency.async",
    from: "typescript",
    to: "nim",
    steps: ["Translate Promises to Future[T]", "Map async/await to asyncdispatch/Chronos"]
  },
  {
    conceptId: "metaprogramming.macros",
    from: "typescript",
    to: "nim",
    steps: ["Translate decorators to macros/templates", "Use compile-time AST transforms"]
  },
  {
    conceptId: "memory.manual",
    from: "typescript",
    to: "nim",
    steps: ["Introduce explicit allocators for buffers", "Use ARC/ORC for deterministic cleanup"]
  },
  {
    conceptId: "paradigms.functional",
    from: "typescript",
    to: "nim",
    steps: ["Translate array map/filter to sequtils", "Use iterators for streaming"]
  }
];

export function typeScriptToNim(code: string): TranslationResult {
  return translateWithEngine("typescript", "nim", code);
}

export const typeScriptToNimRules = rules;
