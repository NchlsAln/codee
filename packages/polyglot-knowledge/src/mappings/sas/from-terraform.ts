import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "sas");

export function terraformToSas(code: string): TranslationResult {
  return translateWithFallback("terraform", "sas", code);
}

export const terraformToSasRules = rules;
