import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "elixir");

export function jsonToElixir(code: string): TranslationResult {
  return translateWithFallback("json", "elixir", code);
}

export const jsonToElixirRules = rules;
