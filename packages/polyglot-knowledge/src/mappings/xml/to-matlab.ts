import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "matlab");

export function xmlToMatlab(code: string): TranslationResult {
  return translateWithFallback("xml", "matlab", code);
}

export const xmlToMatlabRules = rules;
