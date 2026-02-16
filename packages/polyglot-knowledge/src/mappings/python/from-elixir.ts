import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("elixir", "python");

export function elixirToPython(code: string): TranslationResult {
  return translateWithFallback("elixir", "python", code);
}

export const elixirToPythonRules = rules;
