import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "rust");

export function crystalToRust(code: string): TranslationResult {
  return translateWithFallback("crystal", "rust", code);
}

export const crystalToRustRules = rules;
