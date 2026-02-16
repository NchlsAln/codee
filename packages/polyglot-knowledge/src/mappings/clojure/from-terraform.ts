import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "clojure");

export function terraformToClojure(code: string): TranslationResult {
  return translateWithFallback("terraform", "clojure", code);
}

export const terraformToClojureRules = rules;
