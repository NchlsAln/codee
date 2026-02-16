import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("php", "rust");

export function phpToRust(code: string): TranslationResult {
  return translateWithFallback("php", "rust", code);
}

export const phpToRustRules = rules;
