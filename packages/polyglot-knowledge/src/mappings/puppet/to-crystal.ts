import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "crystal");

export function puppetToCrystal(code: string): TranslationResult {
  return translateWithFallback("puppet", "crystal", code);
}

export const puppetToCrystalRules = rules;
