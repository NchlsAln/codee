import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "csharp");

export function dockerfileToCsharp(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "csharp", code);
}

export const dockerfileToCsharpRules = rules;
