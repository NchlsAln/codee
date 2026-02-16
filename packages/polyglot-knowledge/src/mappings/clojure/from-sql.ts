import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "clojure");

export function sqlToClojure(code: string): TranslationResult {
  return translateWithFallback("sql", "clojure", code);
}

export const sqlToClojureRules = rules;
