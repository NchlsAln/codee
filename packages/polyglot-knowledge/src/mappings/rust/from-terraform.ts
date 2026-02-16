import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "rust");

export function terraformToRust(code: string): TranslationResult {
  return translateWithFallback("terraform", "rust", code);
}

export const terraformToRustRules = rules;
