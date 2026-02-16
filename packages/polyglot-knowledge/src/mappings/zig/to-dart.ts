import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "dart");

export function zigToDart(code: string): TranslationResult {
  return translateWithFallback("zig", "dart", code);
}

export const zigToDartRules = rules;
