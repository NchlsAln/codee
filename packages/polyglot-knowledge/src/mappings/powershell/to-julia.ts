import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "julia");

export function powershellToJulia(code: string): TranslationResult {
  return translateWithFallback("powershell", "julia", code);
}

export const powershellToJuliaRules = rules;
