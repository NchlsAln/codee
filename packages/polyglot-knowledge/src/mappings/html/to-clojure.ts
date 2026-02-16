import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "clojure");

export function htmlToClojure(code: string): TranslationResult {
  return translateWithFallback("html", "clojure", code);
}

export const htmlToClojureRules = rules;
