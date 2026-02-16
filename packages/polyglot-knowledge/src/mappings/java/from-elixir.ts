import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("elixir", "java");

export function elixirToJava(code: string): TranslationResult {
  return translateWithFallback("elixir", "java", code);
}

export const elixirToJavaRules = rules;
