import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("elixir", "typescript");

export function elixirToTypeScript(code: string): TranslationResult {
  return translateWithFallback("elixir", "typescript", code);
}

export const elixirToTypeScriptRules = rules;
