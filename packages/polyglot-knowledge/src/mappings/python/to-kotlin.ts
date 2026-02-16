import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("python", "kotlin");

export function pythonToKotlin(code: string): TranslationResult {
  return translateWithFallback("python", "kotlin", code);
}

export const pythonToKotlinRules = rules;
