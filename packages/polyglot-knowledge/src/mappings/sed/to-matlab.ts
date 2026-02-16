import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "matlab");

export function sedToMatlab(code: string): TranslationResult {
  return translateWithFallback("sed", "matlab", code);
}

export const sedToMatlabRules = rules;
