import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "elixir");

export function juliaToElixir(code: string): TranslationResult {
  return translateWithFallback("julia", "elixir", code);
}

export const juliaToElixirRules = rules;
