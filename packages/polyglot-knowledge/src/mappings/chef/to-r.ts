import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "r");

export function chefToR(code: string): TranslationResult {
  return translateWithFallback("chef", "r", code);
}

export const chefToRRules = rules;
