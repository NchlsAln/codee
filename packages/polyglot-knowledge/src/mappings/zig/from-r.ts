import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "zig");

export function rToZig(code: string): TranslationResult {
  return translateWithFallback("r", "zig", code);
}

export const rToZigRules = rules;
