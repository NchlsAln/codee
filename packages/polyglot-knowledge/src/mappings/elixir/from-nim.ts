import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "elixir");

export function nimToElixir(code: string): TranslationResult {
  return translateWithFallback("nim", "elixir", code);
}

export const nimToElixirRules = rules;
