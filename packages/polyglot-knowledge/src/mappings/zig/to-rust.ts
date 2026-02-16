import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "memory.manual",
    from: "zig",
    to: "rust",
    steps: ["Translate explicit allocator usage to ownership and borrowing", "Map defer/errdefer to Drop and scope guards"]
  },
  {
    conceptId: "metaprogramming.compile-time",
    from: "zig",
    to: "rust",
    steps: ["Translate comptime to const eval and macros", "Use build.rs for code generation"]
  },
  {
    conceptId: "concurrency.channels",
    from: "zig",
    to: "rust",
    steps: ["Translate threads to std::thread or tokio", "Use mpsc channels for messaging"]
  },
  {
    conceptId: "systems.ffi",
    from: "zig",
    to: "rust",
    steps: ["Translate @cImport to bindgen or extern blocks", "Map Zig structs to #[repr(C)] structs"]
  }
];

export function zigToRust(code: string): TranslationResult {
  return translateWithEngine("zig", "rust", code);
}

export const zigToRustRules = rules;
