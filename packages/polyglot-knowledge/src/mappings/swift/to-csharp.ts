import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("swift", "csharp");

export function swiftToCsharp(code: string): TranslationResult {
  return translateWithFallback("swift", "csharp", code);
}

export const swiftToCsharpRules = rules;
