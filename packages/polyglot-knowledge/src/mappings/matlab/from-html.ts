import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "matlab");

export function htmlToMatlab(code: string): TranslationResult {
  return translateWithFallback("html", "matlab", code);
}

export const htmlToMatlabRules = rules;
