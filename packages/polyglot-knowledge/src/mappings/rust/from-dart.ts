import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dart", "rust");

export function dartToRust(code: string): TranslationResult {
  return translateWithFallback("dart", "rust", code);
}

export const dartToRustRules = rules;
