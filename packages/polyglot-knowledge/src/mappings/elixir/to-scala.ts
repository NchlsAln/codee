import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("elixir", "scala");

export function elixirToScala(code: string): TranslationResult {
  return translateWithFallback("elixir", "scala", code);
}

export const elixirToScalaRules = rules;
