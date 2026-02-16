import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "zig");

export function juliaToZig(code: string): TranslationResult {
  return translateWithFallback("julia", "zig", code);
}

export const juliaToZigRules = rules;
