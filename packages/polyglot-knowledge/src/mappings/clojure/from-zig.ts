import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "clojure");

export function zigToClojure(code: string): TranslationResult {
  return translateWithFallback("zig", "clojure", code);
}

export const zigToClojureRules = rules;
