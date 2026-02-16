import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "zig");

export function sqlToZig(code: string): TranslationResult {
  return translateWithFallback("sql", "zig", code);
}

export const sqlToZigRules = rules;
