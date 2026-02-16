import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "elixir");

export function awkToElixir(code: string): TranslationResult {
  return translateWithFallback("awk", "elixir", code);
}

export const awkToElixirRules = rules;
