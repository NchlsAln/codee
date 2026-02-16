import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "elixir");

export function terraformToElixir(code: string): TranslationResult {
  return translateWithFallback("terraform", "elixir", code);
}

export const terraformToElixirRules = rules;
