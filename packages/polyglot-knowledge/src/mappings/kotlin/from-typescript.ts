import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("typescript", "kotlin");

export function typescriptToKotlin(code: string): TranslationResult {
  return translateWithFallback("typescript", "kotlin", code);
}

export const typescriptToKotlinRules = rules;
