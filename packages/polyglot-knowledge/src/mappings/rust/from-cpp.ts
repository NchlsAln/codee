import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("cpp", "rust");

export function cppToRust(code: string): TranslationResult {
  return translateWithFallback("cpp", "rust", code);
}

export const cppToRustRules = rules;
