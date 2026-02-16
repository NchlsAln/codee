import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "sas");

export function powershellToSas(code: string): TranslationResult {
  return translateWithFallback("powershell", "sas", code);
}

export const powershellToSasRules = rules;
