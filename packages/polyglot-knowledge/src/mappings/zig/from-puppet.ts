import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "zig");

export function puppetToZig(code: string): TranslationResult {
  return translateWithFallback("puppet", "zig", code);
}

export const puppetToZigRules = rules;
