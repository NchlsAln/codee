import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "erlang");

export function powershellToErlang(code: string): TranslationResult {
  return translateWithFallback("powershell", "erlang", code);
}

export const powershellToErlangRules = rules;
