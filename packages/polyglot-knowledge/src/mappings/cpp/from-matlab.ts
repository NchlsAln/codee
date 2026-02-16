import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "cpp");

export function matlabToCpp(code: string): TranslationResult {
  return translateWithFallback("matlab", "cpp", code);
}

export const matlabToCppRules = rules;
