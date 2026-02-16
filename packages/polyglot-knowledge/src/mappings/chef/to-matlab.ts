import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "matlab");

export function chefToMatlab(code: string): TranslationResult {
  return translateWithFallback("chef", "matlab", code);
}

export const chefToMatlabRules = rules;
