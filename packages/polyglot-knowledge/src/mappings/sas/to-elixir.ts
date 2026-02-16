import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "elixir");

export function sasToElixir(code: string): TranslationResult {
  return translateWithFallback("sas", "elixir", code);
}

export const sasToElixirRules = rules;
