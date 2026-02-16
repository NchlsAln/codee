import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "swift");

export function powershellToSwift(code: string): TranslationResult {
  return translateWithFallback("powershell", "swift", code);
}

export const powershellToSwiftRules = rules;
