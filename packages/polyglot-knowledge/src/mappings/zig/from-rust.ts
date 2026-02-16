import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "memory.manual",
    from: "rust",
    to: "zig",
    steps: ["Translate ownership/borrowing to explicit allocators", "Use defer/errdefer for cleanup"]
  },
  {
    conceptId: "metaprogramming.compile-time",
    from: "rust",
    to: "zig",
    steps: ["Translate procedural macros to comptime", "Use inline for and comptime parameters"]
  },
  {
    conceptId: "concurrency.channels",
    from: "rust",
    to: "zig",
    steps: ["Translate channels to explicit queues", "Use std.Thread or async for concurrency"]
  },
  {
    conceptId: "systems.ffi",
    from: "rust",
    to: "zig",
    steps: ["Translate extern blocks to @cImport", "Use packed structs for ABI compatibility"]
  }
];

export function rustToZig(code: string): TranslationResult {
  return translateWithEngine("rust", "zig", code);
}

export const rustToZigRules = rules;
