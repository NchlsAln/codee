import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("erlang", "csharp");

export function erlangToCsharp(code: string): TranslationResult {
  return translateWithFallback("erlang", "csharp", code);
}

export const erlangToCsharpRules = rules;
