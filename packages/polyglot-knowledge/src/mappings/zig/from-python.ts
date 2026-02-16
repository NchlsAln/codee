import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "memory.manual",
    from: "python",
    to: "zig",
    steps: ["Introduce explicit allocators for collections", "Replace GC-managed objects with allocator-owned memory"]
  },
  {
    conceptId: "metaprogramming.compile-time",
    from: "python",
    to: "zig",
    steps: ["Translate dynamic code generation to comptime", "Use inline for and comptime parameters"]
  },
  {
    conceptId: "concurrency.channels",
    from: "python",
    to: "zig",
    steps: ["Translate asyncio queues to channel/message patterns", "Use std.Thread for parallelism"]
  },
  {
    conceptId: "systems.ffi",
    from: "python",
    to: "zig",
    steps: ["Translate ctypes/cffi to @cImport bindings", "Use packed structs for C ABI"]
  }
];

export function pythonToZig(code: string): TranslationResult {
  return translateWithEngine("python", "zig", code);
}

export const pythonToZigRules = rules;
