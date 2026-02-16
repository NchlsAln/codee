import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "matlab");

export function scssToMatlab(code: string): TranslationResult {
  return translateWithFallback("scss", "matlab", code);
}

export const scssToMatlabRules = rules;
