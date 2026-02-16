import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "zig");

export function sedToZig(code: string): TranslationResult {
  return translateWithFallback("sed", "zig", code);
}

export const sedToZigRules = rules;
