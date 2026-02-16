import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "typescript");

export function powershellToTypeScript(code: string): TranslationResult {
  return translateWithFallback("powershell", "typescript", code);
}

export const powershellToTypeScriptRules = rules;
