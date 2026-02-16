import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "clojure");

export function puppetToClojure(code: string): TranslationResult {
  return translateWithFallback("puppet", "clojure", code);
}

export const puppetToClojureRules = rules;
