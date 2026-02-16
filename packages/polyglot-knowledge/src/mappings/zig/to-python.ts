import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "memory.manual",
    from: "zig",
    to: "python",
    steps: ["Translate explicit allocators to managed objects", "Remove manual free/defer in favor of GC"]
  },
  {
    conceptId: "metaprogramming.compile-time",
    from: "zig",
    to: "python",
    steps: ["Translate comptime logic to module-level code generation", "Use decorators or codegen scripts for compile-time behavior"]
  },
  {
    conceptId: "concurrency.channels",
    from: "zig",
    to: "python",
    steps: ["Translate threads to asyncio tasks or threading.Thread", "Use asyncio.Queue for message passing"]
  },
  {
    conceptId: "systems.ffi",
    from: "zig",
    to: "python",
    steps: ["Translate @cImport to ctypes/cffi bindings", "Map struct layouts to ctypes.Structure"]
  }
];

export function zigToPython(code: string): TranslationResult {
  return translateWithEngine("zig", "python", code);
}

export const zigToPythonRules = rules;
