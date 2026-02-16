import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "matlab");

export function puppetToMatlab(code: string): TranslationResult {
  return translateWithFallback("puppet", "matlab", code);
}

export const puppetToMatlabRules = rules;
