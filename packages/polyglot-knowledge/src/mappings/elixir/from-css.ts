import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "elixir");

export function cssToElixir(code: string): TranslationResult {
  return translateWithFallback("css", "elixir", code);
}

export const cssToElixirRules = rules;
