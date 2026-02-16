import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("clojure", "kotlin");

export function clojureToKotlin(code: string): TranslationResult {
  return translateWithFallback("clojure", "kotlin", code);
}

export const clojureToKotlinRules = rules;
