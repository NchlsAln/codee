import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "metaprogramming.macros",
    from: "rust",
    to: "crystal",
    steps: ["Translate Rust macros to Crystal macros", "Use macro expansions for boilerplate"]
  },
  {
    conceptId: "concurrency.fibers",
    from: "rust",
    to: "crystal",
    steps: ["Translate async tasks to fibers", "Use channels for message passing"]
  },
  {
    conceptId: "paradigms.functional",
    from: "rust",
    to: "crystal",
    steps: ["Translate iterator chains to map/select", "Use blocks for closures"]
  },
  {
    conceptId: "systems.ffi",
    from: "rust",
    to: "crystal",
    steps: ["Translate extern blocks to lib bindings", "Map #[repr(C)] structs to Crystal structs"]
  }
];

export function rustToCrystal(code: string): TranslationResult {
  return translateWithEngine("rust", "crystal", code);
}

export const rustToCrystalRules = rules;
