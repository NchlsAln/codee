import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "clojure");

export function scssToClojure(code: string): TranslationResult {
  return translateWithFallback("scss", "clojure", code);
}

export const scssToClojureRules = rules;
