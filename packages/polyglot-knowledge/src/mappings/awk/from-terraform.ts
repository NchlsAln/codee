import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "awk");

export function terraformToAwk(code: string): TranslationResult {
  return translateWithFallback("terraform", "awk", code);
}

export const terraformToAwkRules = rules;
