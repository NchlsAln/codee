import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "crystal");

export function awkToCrystal(code: string): TranslationResult {
  return translateWithFallback("awk", "crystal", code);
}

export const awkToCrystalRules = rules;
