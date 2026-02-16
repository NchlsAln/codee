import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "clojure");

export function awkToClojure(code: string): TranslationResult {
  return translateWithFallback("awk", "clojure", code);
}

export const awkToClojureRules = rules;
