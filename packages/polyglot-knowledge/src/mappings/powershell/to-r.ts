import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "r");

export function powershellToR(code: string): TranslationResult {
  return translateWithFallback("powershell", "r", code);
}

export const powershellToRRules = rules;
