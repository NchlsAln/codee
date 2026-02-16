import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("typescript", "rust");

export function typescriptToRust(code: string): TranslationResult {
  return translateWithFallback("typescript", "rust", code);
}

export const typescriptToRustRules = rules;
