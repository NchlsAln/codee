import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "clojure");

export function cssToClojure(code: string): TranslationResult {
  return translateWithFallback("css", "clojure", code);
}

export const cssToClojureRules = rules;
