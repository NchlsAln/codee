import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "php");

export function powershellToPhp(code: string): TranslationResult {
  return translateWithFallback("powershell", "php", code);
}

export const powershellToPhpRules = rules;
