import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ruby", "csharp");

export function rubyToCsharp(code: string): TranslationResult {
  return translateWithFallback("ruby", "csharp", code);
}

export const rubyToCsharpRules = rules;
