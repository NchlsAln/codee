import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "rust");

export function sasToRust(code: string): TranslationResult {
  return translateWithFallback("sas", "rust", code);
}

export const sasToRustRules = rules;
