import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "memory.manual",
    from: "zig",
    to: "typescript",
    steps: ["Translate explicit allocators to managed objects", "Use ArrayBuffer for manual byte control"]
  },
  {
    conceptId: "metaprogramming.compile-time",
    from: "zig",
    to: "typescript",
    steps: ["Translate comptime to build-time code generation", "Use codegen scripts or TS transformers"]
  },
  {
    conceptId: "concurrency.channels",
    from: "zig",
    to: "typescript",
    steps: ["Translate threads to Worker threads", "Use Promises and async queues for coordination"]
  },
  {
    conceptId: "systems.ffi",
    from: "zig",
    to: "typescript",
    steps: ["Translate C interop to N-API or FFI bindings", "Use buffer views for struct layouts"]
  }
];

export function zigToTypeScript(code: string): TranslationResult {
  return translateWithEngine("zig", "typescript", code);
}

export const zigToTypeScriptRules = rules;
