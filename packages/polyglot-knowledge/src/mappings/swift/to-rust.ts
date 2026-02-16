import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("swift", "rust");

export function swiftToRust(code: string): TranslationResult {
  return translateWithFallback("swift", "rust", code);
}

export const swiftToRustRules = rules;
