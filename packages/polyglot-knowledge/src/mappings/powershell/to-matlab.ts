import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "matlab");

export function powershellToMatlab(code: string): TranslationResult {
  return translateWithFallback("powershell", "matlab", code);
}

export const powershellToMatlabRules = rules;
