import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "crystal");

export function matlabToCrystal(code: string): TranslationResult {
  return translateWithFallback("matlab", "crystal", code);
}

export const matlabToCrystalRules = rules;
