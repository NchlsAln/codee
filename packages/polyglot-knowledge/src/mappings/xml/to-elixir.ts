import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "elixir");

export function xmlToElixir(code: string): TranslationResult {
  return translateWithFallback("xml", "elixir", code);
}

export const xmlToElixirRules = rules;
