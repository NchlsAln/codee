import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "sed");

export function chefToSed(code: string): TranslationResult {
  return translateWithFallback("chef", "sed", code);
}

export const chefToSedRules = rules;
