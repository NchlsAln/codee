import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "crystal");

export function cssToCrystal(code: string): TranslationResult {
  return translateWithFallback("css", "crystal", code);
}

export const cssToCrystalRules = rules;
