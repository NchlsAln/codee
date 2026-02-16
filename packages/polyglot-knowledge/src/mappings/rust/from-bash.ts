import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "rust");

export function bashToRust(code: string): TranslationResult {
  return translateWithFallback("bash", "rust", code);
}

export const bashToRustRules = rules;
