import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "sas");

export function chefToSas(code: string): TranslationResult {
  return translateWithFallback("chef", "sas", code);
}

export const chefToSasRules = rules;
