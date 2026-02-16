import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "clojure");

export function nimToClojure(code: string): TranslationResult {
  return translateWithFallback("nim", "clojure", code);
}

export const nimToClojureRules = rules;
