import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "metaprogramming.macros",
    from: "crystal",
    to: "rust",
    steps: ["Translate Crystal macros to Rust macros", "Use build.rs for compile-time codegen"]
  },
  {
    conceptId: "concurrency.fibers",
    from: "crystal",
    to: "rust",
    steps: ["Translate fibers to async tasks", "Use tokio and channels for coordination"]
  },
  {
    conceptId: "paradigms.functional",
    from: "crystal",
    to: "rust",
    steps: ["Translate blocks to closures", "Use iterator chains for collection pipelines"]
  },
  {
    conceptId: "systems.ffi",
    from: "crystal",
    to: "rust",
    steps: ["Translate lib bindings to extern blocks", "Use #[repr(C)] for structs"]
  }
];

export function crystalToRust(code: string): TranslationResult {
  return translateWithEngine("crystal", "rust", code);
}

export const crystalToRustRules = rules;
