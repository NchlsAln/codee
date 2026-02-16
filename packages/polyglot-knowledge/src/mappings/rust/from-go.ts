import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("go", "rust");

export function goToRust(code: string): TranslationResult {
  return translateWithFallback("go", "rust", code);
}

export const goToRustRules = rules;
