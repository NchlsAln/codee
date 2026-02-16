import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "crystal");

export function sedToCrystal(code: string): TranslationResult {
  return translateWithFallback("sed", "crystal", code);
}

export const sedToCrystalRules = rules;
