import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("erlang", "typescript");

export function erlangToTypeScript(code: string): TranslationResult {
  return translateWithFallback("erlang", "typescript", code);
}

export const erlangToTypeScriptRules = rules;
