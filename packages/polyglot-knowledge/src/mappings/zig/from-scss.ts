import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "zig");

export function scssToZig(code: string): TranslationResult {
  return translateWithFallback("scss", "zig", code);
}

export const scssToZigRules = rules;
