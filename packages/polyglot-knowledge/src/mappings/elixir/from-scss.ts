import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "elixir");

export function scssToElixir(code: string): TranslationResult {
  return translateWithFallback("scss", "elixir", code);
}

export const scssToElixirRules = rules;
