import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "zig");

export function awkToZig(code: string): TranslationResult {
  return translateWithFallback("awk", "zig", code);
}

export const awkToZigRules = rules;
