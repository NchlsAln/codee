import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "crystal");

export function sasToCrystal(code: string): TranslationResult {
  return translateWithFallback("sas", "crystal", code);
}

export const sasToCrystalRules = rules;
