import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "rust");

export function puppetToRust(code: string): TranslationResult {
  return translateWithFallback("puppet", "rust", code);
}

export const puppetToRustRules = rules;
