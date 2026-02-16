import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "swift");

export function matlabToSwift(code: string): TranslationResult {
  return translateWithFallback("matlab", "swift", code);
}

export const matlabToSwiftRules = rules;
