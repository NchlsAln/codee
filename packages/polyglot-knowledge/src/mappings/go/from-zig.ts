import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "go");

export function zigToGo(code: string): TranslationResult {
  return translateWithFallback("zig", "go", code);
}

export const zigToGoRules = rules;
