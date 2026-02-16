import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "rust");

export function ansibleToRust(code: string): TranslationResult {
  return translateWithFallback("ansible", "rust", code);
}

export const ansibleToRustRules = rules;
