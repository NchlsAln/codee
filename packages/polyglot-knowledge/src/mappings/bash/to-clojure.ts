import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "clojure");

export function bashToClojure(code: string): TranslationResult {
  return translateWithFallback("bash", "clojure", code);
}

export const bashToClojureRules = rules;
