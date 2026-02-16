import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "zig");

export function matlabToZig(code: string): TranslationResult {
  return translateWithFallback("matlab", "zig", code);
}

export const matlabToZigRules = rules;
