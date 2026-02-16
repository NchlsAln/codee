import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "elixir");

export function matlabToElixir(code: string): TranslationResult {
  return translateWithFallback("matlab", "elixir", code);
}

export const matlabToElixirRules = rules;
