import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "crystal");

export function chefToCrystal(code: string): TranslationResult {
  return translateWithFallback("chef", "crystal", code);
}

export const chefToCrystalRules = rules;
