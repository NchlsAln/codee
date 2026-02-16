import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "rust");

export function xmlToRust(code: string): TranslationResult {
  return translateWithFallback("xml", "rust", code);
}

export const xmlToRustRules = rules;
