import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "rust");

export function sedToRust(code: string): TranslationResult {
  return translateWithFallback("sed", "rust", code);
}

export const sedToRustRules = rules;
