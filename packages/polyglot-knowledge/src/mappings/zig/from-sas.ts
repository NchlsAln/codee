import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "zig");

export function sasToZig(code: string): TranslationResult {
  return translateWithFallback("sas", "zig", code);
}

export const sasToZigRules = rules;
