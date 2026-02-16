import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "rust");

export function zigToRust(code: string): TranslationResult {
  return translateWithFallback("zig", "rust", code);
}

export const zigToRustRules = rules;
