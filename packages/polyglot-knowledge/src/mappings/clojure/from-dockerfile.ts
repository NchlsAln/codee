import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "clojure");

export function dockerfileToClojure(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "clojure", code);
}

export const dockerfileToClojureRules = rules;
