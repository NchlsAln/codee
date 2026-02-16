import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "zig");

export function ansibleToZig(code: string): TranslationResult {
  return translateWithFallback("ansible", "zig", code);
}

export const ansibleToZigRules = rules;
