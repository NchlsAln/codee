import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "crystal");

export function terraformToCrystal(code: string): TranslationResult {
  return translateWithFallback("terraform", "crystal", code);
}

export const terraformToCrystalRules = rules;
