import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("erlang", "rust");

export function erlangToRust(code: string): TranslationResult {
  return translateWithFallback("erlang", "rust", code);
}

export const erlangToRustRules = rules;
