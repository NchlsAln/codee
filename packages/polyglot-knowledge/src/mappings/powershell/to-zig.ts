import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "zig");

export function powershellToZig(code: string): TranslationResult {
  return translateWithFallback("powershell", "zig", code);
}

export const powershellToZigRules = rules;
