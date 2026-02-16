import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("elixir", "cpp");

export function elixirToCpp(code: string): TranslationResult {
  return translateWithFallback("elixir", "cpp", code);
}

export const elixirToCppRules = rules;
