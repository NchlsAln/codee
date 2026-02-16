import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "elixir");

export function htmlToElixir(code: string): TranslationResult {
  return translateWithFallback("html", "elixir", code);
}

export const htmlToElixirRules = rules;
