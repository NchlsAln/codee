import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "rust");

export function jsonToRust(code: string): TranslationResult {
  return translateWithFallback("json", "rust", code);
}

export const jsonToRustRules = rules;
