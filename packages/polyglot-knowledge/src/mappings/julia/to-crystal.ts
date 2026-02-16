import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "crystal");

export function juliaToCrystal(code: string): TranslationResult {
  return translateWithFallback("julia", "crystal", code);
}

export const juliaToCrystalRules = rules;
