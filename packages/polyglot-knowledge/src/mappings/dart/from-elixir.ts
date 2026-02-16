import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("elixir", "dart");

export function elixirToDart(code: string): TranslationResult {
  return translateWithFallback("elixir", "dart", code);
}

export const elixirToDartRules = rules;
