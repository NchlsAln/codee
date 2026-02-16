import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "clojure");

export function xmlToClojure(code: string): TranslationResult {
  return translateWithFallback("xml", "clojure", code);
}

export const xmlToClojureRules = rules;
