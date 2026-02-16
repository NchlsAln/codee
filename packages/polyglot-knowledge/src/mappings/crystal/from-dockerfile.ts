import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "crystal");

export function dockerfileToCrystal(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "crystal", code);
}

export const dockerfileToCrystalRules = rules;
