import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "crystal");

export function xmlToCrystal(code: string): TranslationResult {
  return translateWithFallback("xml", "crystal", code);
}

export const xmlToCrystalRules = rules;
