import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "elixir");

export function puppetToElixir(code: string): TranslationResult {
  return translateWithFallback("puppet", "elixir", code);
}

export const puppetToElixirRules = rules;
