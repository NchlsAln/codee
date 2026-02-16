import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "zig");

export function htmlToZig(code: string): TranslationResult {
  return translateWithFallback("html", "zig", code);
}

export const htmlToZigRules = rules;
