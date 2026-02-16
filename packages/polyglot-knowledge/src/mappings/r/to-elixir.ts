import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "elixir");

export function rToElixir(code: string): TranslationResult {
  return translateWithFallback("r", "elixir", code);
}

export const rToElixirRules = rules;
