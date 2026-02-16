import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "zig");

export function chefToZig(code: string): TranslationResult {
  return translateWithFallback("chef", "zig", code);
}

export const chefToZigRules = rules;
