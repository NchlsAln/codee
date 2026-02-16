import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "go");

export function powershellToGo(code: string): TranslationResult {
  return translateWithFallback("powershell", "go", code);
}

export const powershellToGoRules = rules;
