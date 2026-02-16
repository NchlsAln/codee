import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "swift");

export function zigToSwift(code: string): TranslationResult {
  return translateWithFallback("zig", "swift", code);
}

export const zigToSwiftRules = rules;
