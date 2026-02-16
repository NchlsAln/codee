import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "rust");

export function sqlToRust(code: string): TranslationResult {
  return translateWithFallback("sql", "rust", code);
}

export const sqlToRustRules = rules;
