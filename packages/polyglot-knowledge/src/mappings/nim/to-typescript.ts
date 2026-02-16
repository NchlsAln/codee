import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "concurrency.async",
    from: "nim",
    to: "typescript",
    steps: ["Translate asyncdispatch/Chronos to Promises and async/await", "Map Future[T] to Promise<T>"]
  },
  {
    conceptId: "metaprogramming.macros",
    from: "nim",
    to: "typescript",
    steps: ["Translate macros/templates to decorators or build-time codegen", "Use TS transformers if needed"]
  },
  {
    conceptId: "memory.manual",
    from: "nim",
    to: "typescript",
    steps: ["Translate ARC/ORC semantics to GC-managed objects", "Use ArrayBuffer for manual byte control"]
  },
  {
    conceptId: "paradigms.functional",
    from: "nim",
    to: "typescript",
    steps: ["Translate sequtils map/filter to array methods", "Use iterators for lazy sequences"]
  }
];

export function nimToTypeScript(code: string): TranslationResult {
  return translateWithEngine("nim", "typescript", code);
}

export const nimToTypeScriptRules = rules;
