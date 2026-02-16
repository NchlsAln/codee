import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "clojure");

export function jsonToClojure(code: string): TranslationResult {
  return translateWithFallback("json", "clojure", code);
}

export const jsonToClojureRules = rules;
