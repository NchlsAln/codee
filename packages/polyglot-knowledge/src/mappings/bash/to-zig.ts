import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "zig");

export function bashToZig(code: string): TranslationResult {
  return translateWithFallback("bash", "zig", code);
}

export const bashToZigRules = rules;
