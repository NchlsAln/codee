import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "rust");

export function cssToRust(code: string): TranslationResult {
  return translateWithFallback("css", "rust", code);
}

export const cssToRustRules = rules;
