import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "elixir");

export function dockerfileToElixir(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "elixir", code);
}

export const dockerfileToElixirRules = rules;
