import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("clojure", "csharp");

export function clojureToCsharp(code: string): TranslationResult {
  return translateWithFallback("clojure", "csharp", code);
}

export const clojureToCsharpRules = rules;
