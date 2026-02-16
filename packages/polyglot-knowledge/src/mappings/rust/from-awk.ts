import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "rust");

export function awkToRust(code: string): TranslationResult {
  return translateWithFallback("awk", "rust", code);
}

export const awkToRustRules = rules;
