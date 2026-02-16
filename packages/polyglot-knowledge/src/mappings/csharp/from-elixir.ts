import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("elixir", "csharp");

export function elixirToCsharp(code: string): TranslationResult {
  return translateWithFallback("elixir", "csharp", code);
}

export const elixirToCsharpRules = rules;
