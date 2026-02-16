import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "zig");

export function jsonToZig(code: string): TranslationResult {
  return translateWithFallback("json", "zig", code);
}

export const jsonToZigRules = rules;
