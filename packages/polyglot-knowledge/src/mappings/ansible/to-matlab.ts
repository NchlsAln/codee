import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "matlab");

export function ansibleToMatlab(code: string): TranslationResult {
  return translateWithFallback("ansible", "matlab", code);
}

export const ansibleToMatlabRules = rules;
