import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "rust");

export function chefToRust(code: string): TranslationResult {
  return translateWithFallback("chef", "rust", code);
}

export const chefToRustRules = rules;
