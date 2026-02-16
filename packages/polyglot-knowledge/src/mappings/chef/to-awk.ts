import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "awk");

export function chefToAwk(code: string): TranslationResult {
  return translateWithFallback("chef", "awk", code);
}

export const chefToAwkRules = rules;
