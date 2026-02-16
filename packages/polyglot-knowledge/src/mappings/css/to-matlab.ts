import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "matlab");

export function cssToMatlab(code: string): TranslationResult {
  return translateWithFallback("css", "matlab", code);
}

export const cssToMatlabRules = rules;
