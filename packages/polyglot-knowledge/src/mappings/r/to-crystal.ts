import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "crystal");

export function rToCrystal(code: string): TranslationResult {
  return translateWithFallback("r", "crystal", code);
}

export const rToCrystalRules = rules;
