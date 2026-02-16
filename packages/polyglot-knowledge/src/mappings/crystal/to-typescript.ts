import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "metaprogramming.macros",
    from: "crystal",
    to: "typescript",
    steps: ["Translate Crystal macros to decorators or build-time codegen", "Use TS transformers where needed"]
  },
  {
    conceptId: "concurrency.fibers",
    from: "crystal",
    to: "typescript",
    steps: ["Translate fibers to async/await or worker threads", "Use Promises for scheduling"]
  },
  {
    conceptId: "paradigms.functional",
    from: "crystal",
    to: "typescript",
    steps: ["Translate blocks to callbacks", "Use array map/filter for collection pipelines"]
  },
  {
    conceptId: "systems.ffi",
    from: "crystal",
    to: "typescript",
    steps: ["Translate lib bindings to N-API/FFI", "Use buffer views for struct layouts"]
  }
];

export function crystalToTypeScript(code: string): TranslationResult {
  return translateWithEngine("crystal", "typescript", code);
}

export const crystalToTypeScriptRules = rules;
