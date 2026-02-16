import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "elixir");

export function ansibleToElixir(code: string): TranslationResult {
  return translateWithFallback("ansible", "elixir", code);
}

export const ansibleToElixirRules = rules;
