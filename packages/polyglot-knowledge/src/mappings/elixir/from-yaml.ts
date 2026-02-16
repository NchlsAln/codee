import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "elixir");

export function yamlToElixir(code: string): TranslationResult {
  return translateWithFallback("yaml", "elixir", code);
}

export const yamlToElixirRules = rules;
