import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "elixir");

export function sedToElixir(code: string): TranslationResult {
  return translateWithFallback("sed", "elixir", code);
}

export const sedToElixirRules = rules;
