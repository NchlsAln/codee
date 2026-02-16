import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "elixir");

export function zigToElixir(code: string): TranslationResult {
  return translateWithFallback("zig", "elixir", code);
}

export const zigToElixirRules = rules;
