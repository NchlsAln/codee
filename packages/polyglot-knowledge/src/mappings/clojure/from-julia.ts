import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "clojure");

export function juliaToClojure(code: string): TranslationResult {
  return translateWithFallback("julia", "clojure", code);
}

export const juliaToClojureRules = rules;
