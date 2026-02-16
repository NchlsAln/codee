import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "memory.manual",
    from: "typescript",
    to: "zig",
    steps: ["Introduce explicit allocators for buffers", "Replace GC semantics with allocator-managed memory"]
  },
  {
    conceptId: "metaprogramming.compile-time",
    from: "typescript",
    to: "zig",
    steps: ["Translate TS decorators/metadata to comptime logic", "Use build steps for code generation"]
  },
  {
    conceptId: "concurrency.channels",
    from: "typescript",
    to: "zig",
    steps: ["Translate Promises/Workers to std.Thread", "Use channels for message passing"]
  },
  {
    conceptId: "systems.ffi",
    from: "typescript",
    to: "zig",
    steps: ["Translate N-API/FFI to @cImport", "Use explicit C ABI layouts"]
  }
];

export function typeScriptToZig(code: string): TranslationResult {
  return translateWithEngine("typescript", "zig", code);
}

export const typeScriptToZigRules = rules;
