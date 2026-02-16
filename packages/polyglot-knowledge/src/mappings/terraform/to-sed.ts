import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "sed");

export function terraformToSed(code: string): TranslationResult {
  return translateWithFallback("terraform", "sed", code);
}

export const terraformToSedRules = rules;
