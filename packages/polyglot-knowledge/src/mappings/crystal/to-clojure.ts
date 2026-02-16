import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "clojure");

export function crystalToClojure(code: string): TranslationResult {
  return translateWithFallback("crystal", "clojure", code);
}

export const crystalToClojureRules = rules;
