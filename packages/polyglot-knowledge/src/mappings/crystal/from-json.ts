import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "crystal");

export function jsonToCrystal(code: string): TranslationResult {
  return translateWithFallback("json", "crystal", code);
}

export const jsonToCrystalRules = rules;
