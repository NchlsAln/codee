import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "elixir");

export function chefToElixir(code: string): TranslationResult {
  return translateWithFallback("chef", "elixir", code);
}

export const chefToElixirRules = rules;
