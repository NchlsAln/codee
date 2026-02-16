import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "matlab");

export function jsonToMatlab(code: string): TranslationResult {
  return translateWithFallback("json", "matlab", code);
}

export const jsonToMatlabRules = rules;
