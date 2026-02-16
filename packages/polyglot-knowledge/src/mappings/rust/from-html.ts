import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "rust");

export function htmlToRust(code: string): TranslationResult {
  return translateWithFallback("html", "rust", code);
}

export const htmlToRustRules = rules;
