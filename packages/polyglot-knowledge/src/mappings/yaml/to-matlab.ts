import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "matlab");

export function yamlToMatlab(code: string): TranslationResult {
  return translateWithFallback("yaml", "matlab", code);
}

export const yamlToMatlabRules = rules;
