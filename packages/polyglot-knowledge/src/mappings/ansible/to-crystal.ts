import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "crystal");

export function ansibleToCrystal(code: string): TranslationResult {
  return translateWithFallback("ansible", "crystal", code);
}

export const ansibleToCrystalRules = rules;
