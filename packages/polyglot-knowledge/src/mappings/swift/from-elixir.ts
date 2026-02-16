import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("elixir", "swift");

export function elixirToSwift(code: string): TranslationResult {
  return translateWithFallback("elixir", "swift", code);
}

export const elixirToSwiftRules = rules;
