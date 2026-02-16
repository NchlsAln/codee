import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "rust");

export function powershellToRust(code: string): TranslationResult {
  return translateWithFallback("powershell", "rust", code);
}

export const powershellToRustRules = rules;
