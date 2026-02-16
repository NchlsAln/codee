import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "clojure");

export function matlabToClojure(code: string): TranslationResult {
  return translateWithFallback("matlab", "clojure", code);
}

export const matlabToClojureRules = rules;
