import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "zig");

export function terraformToZig(code: string): TranslationResult {
  return translateWithFallback("terraform", "zig", code);
}

export const terraformToZigRules = rules;
