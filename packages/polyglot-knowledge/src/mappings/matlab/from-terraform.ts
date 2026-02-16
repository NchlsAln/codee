import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "matlab");

export function terraformToMatlab(code: string): TranslationResult {
  return translateWithFallback("terraform", "matlab", code);
}

export const terraformToMatlabRules = rules;
