import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "elixir");

export function bashToElixir(code: string): TranslationResult {
  return translateWithFallback("bash", "elixir", code);
}

export const bashToElixirRules = rules;
