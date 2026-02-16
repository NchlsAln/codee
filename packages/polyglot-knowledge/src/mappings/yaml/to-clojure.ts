import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "clojure");

export function yamlToClojure(code: string): TranslationResult {
  return translateWithFallback("yaml", "clojure", code);
}

export const yamlToClojureRules = rules;
