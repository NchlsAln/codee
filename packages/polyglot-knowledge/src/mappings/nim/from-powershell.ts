import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "nim");

export function powershellToNim(code: string): TranslationResult {
  return translateWithFallback("powershell", "nim", code);
}

export const powershellToNimRules = rules;
