import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "ruby");

export function powershellToRuby(code: string): TranslationResult {
  return translateWithFallback("powershell", "ruby", code);
}

export const powershellToRubyRules = rules;
