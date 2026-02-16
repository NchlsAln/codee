import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "nim");

export function matlabToNim(code: string): TranslationResult {
  return translateWithFallback("matlab", "nim", code);
}

export const matlabToNimRules = rules;
