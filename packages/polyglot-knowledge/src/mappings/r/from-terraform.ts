import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "r");

export function terraformToR(code: string): TranslationResult {
  return translateWithFallback("terraform", "r", code);
}

export const terraformToRRules = rules;
