import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "clojure");

export function sasToClojure(code: string): TranslationResult {
  return translateWithFallback("sas", "clojure", code);
}

export const sasToClojureRules = rules;
