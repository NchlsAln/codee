import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "matlab");

export function awkToMatlab(code: string): TranslationResult {
  return translateWithFallback("awk", "matlab", code);
}

export const awkToMatlabRules = rules;
