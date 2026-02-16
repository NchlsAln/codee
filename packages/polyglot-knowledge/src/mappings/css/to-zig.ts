import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "zig");

export function cssToZig(code: string): TranslationResult {
  return translateWithFallback("css", "zig", code);
}

export const cssToZigRules = rules;
