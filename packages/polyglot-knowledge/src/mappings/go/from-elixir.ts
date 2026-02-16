import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("elixir", "go");

export function elixirToGo(code: string): TranslationResult {
  return translateWithFallback("elixir", "go", code);
}

export const elixirToGoRules = rules;
