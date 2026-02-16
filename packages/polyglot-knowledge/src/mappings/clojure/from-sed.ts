import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "clojure");

export function sedToClojure(code: string): TranslationResult {
  return translateWithFallback("sed", "clojure", code);
}

export const sedToClojureRules = rules;
