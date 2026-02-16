import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("erlang", "python");

export function erlangToPython(code: string): TranslationResult {
  return translateWithFallback("erlang", "python", code);
}

export const erlangToPythonRules = rules;
