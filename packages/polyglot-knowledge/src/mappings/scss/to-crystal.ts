import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "crystal");

export function scssToCrystal(code: string): TranslationResult {
  return translateWithFallback("scss", "crystal", code);
}

export const scssToCrystalRules = rules;
