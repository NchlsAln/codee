import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "kotlin");

export function powershellToKotlin(code: string): TranslationResult {
  return translateWithFallback("powershell", "kotlin", code);
}

export const powershellToKotlinRules = rules;
