import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("elixir", "rust");

export function elixirToRust(code: string): TranslationResult {
  return translateWithFallback("elixir", "rust", code);
}

export const elixirToRustRules = rules;
