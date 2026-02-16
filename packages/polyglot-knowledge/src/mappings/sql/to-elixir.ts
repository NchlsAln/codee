import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "elixir");

export function sqlToElixir(code: string): TranslationResult {
  return translateWithFallback("sql", "elixir", code);
}

export const sqlToElixirRules = rules;
