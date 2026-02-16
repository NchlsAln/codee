import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "clojure");

export function rToClojure(code: string): TranslationResult {
  return translateWithFallback("r", "clojure", code);
}

export const rToClojureRules = rules;
