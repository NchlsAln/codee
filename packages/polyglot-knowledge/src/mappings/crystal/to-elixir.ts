import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "elixir");

export function crystalToElixir(code: string): TranslationResult {
  return translateWithFallback("crystal", "elixir", code);
}

export const crystalToElixirRules = rules;
