import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "rust");

export function rToRust(code: string): TranslationResult {
  return translateWithFallback("r", "rust", code);
}

export const rToRustRules = rules;
