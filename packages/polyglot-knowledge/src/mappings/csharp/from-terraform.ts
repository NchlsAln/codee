import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "csharp");

export function terraformToCsharp(code: string): TranslationResult {
  return translateWithFallback("terraform", "csharp", code);
}

export const terraformToCsharpRules = rules;
