import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "clojure");

export function ansibleToClojure(code: string): TranslationResult {
  return translateWithFallback("ansible", "clojure", code);
}

export const ansibleToClojureRules = rules;
