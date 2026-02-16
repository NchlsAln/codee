import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("clojure", "rust");

export function clojureToRust(code: string): TranslationResult {
  return translateWithFallback("clojure", "rust", code);
}

export const clojureToRustRules = rules;
