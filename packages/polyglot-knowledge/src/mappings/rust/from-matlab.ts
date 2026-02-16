import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "rust");

export function matlabToRust(code: string): TranslationResult {
  return translateWithFallback("matlab", "rust", code);
}

export const matlabToRustRules = rules;
