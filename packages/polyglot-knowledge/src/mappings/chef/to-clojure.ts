import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "clojure");

export function chefToClojure(code: string): TranslationResult {
  return translateWithFallback("chef", "clojure", code);
}

export const chefToClojureRules = rules;
