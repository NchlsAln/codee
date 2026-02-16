import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "zig");

export function xmlToZig(code: string): TranslationResult {
  return translateWithFallback("xml", "zig", code);
}

export const xmlToZigRules = rules;
