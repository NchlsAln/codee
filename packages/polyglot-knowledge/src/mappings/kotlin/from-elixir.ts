import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("elixir", "kotlin");

export function elixirToKotlin(code: string): TranslationResult {
  return translateWithFallback("elixir", "kotlin", code);
}

export const elixirToKotlinRules = rules;
