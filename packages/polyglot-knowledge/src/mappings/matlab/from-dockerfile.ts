import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "matlab");

export function dockerfileToMatlab(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "matlab", code);
}

export const dockerfileToMatlabRules = rules;
