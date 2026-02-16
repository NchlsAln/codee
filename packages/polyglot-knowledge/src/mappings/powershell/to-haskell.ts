import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "haskell");

export function powershellToHaskell(code: string): TranslationResult {
  return translateWithFallback("powershell", "haskell", code);
}

export const powershellToHaskellRules = rules;
