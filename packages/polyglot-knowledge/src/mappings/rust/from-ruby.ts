import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ruby", "rust");

export function rubyToRust(code: string): TranslationResult {
  return translateWithFallback("ruby", "rust", code);
}

export const rubyToRustRules = rules;
