import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("kotlin", "rust");

export function kotlinToRust(code: string): TranslationResult {
  return translateWithFallback("kotlin", "rust", code);
}

export const kotlinToRustRules = rules;
