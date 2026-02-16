import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scala", "rust");

export function scalaToRust(code: string): TranslationResult {
  return translateWithFallback("scala", "rust", code);
}

export const scalaToRustRules = rules;
