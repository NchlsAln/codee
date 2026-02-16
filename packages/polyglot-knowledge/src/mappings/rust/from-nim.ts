import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "rust");

export function nimToRust(code: string): TranslationResult {
  return translateWithFallback("nim", "rust", code);
}

export const nimToRustRules = rules;
