import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "rust");

export function juliaToRust(code: string): TranslationResult {
  return translateWithFallback("julia", "rust", code);
}

export const juliaToRustRules = rules;
