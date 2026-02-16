import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "rust");

export function scssToRust(code: string): TranslationResult {
  return translateWithFallback("scss", "rust", code);
}

export const scssToRustRules = rules;
