import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("java", "rust");

export function javaToRust(code: string): TranslationResult {
  return translateWithFallback("java", "rust", code);
}

export const javaToRustRules = rules;
