import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "crystal");

export function bashToCrystal(code: string): TranslationResult {
  return translateWithFallback("bash", "crystal", code);
}

export const bashToCrystalRules = rules;
