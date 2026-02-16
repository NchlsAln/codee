import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "go");

export function matlabToGo(code: string): TranslationResult {
  return translateWithFallback("matlab", "go", code);
}

export const matlabToGoRules = rules;
