import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "matlab");

export function bashToMatlab(code: string): TranslationResult {
  return translateWithFallback("bash", "matlab", code);
}

export const bashToMatlabRules = rules;
