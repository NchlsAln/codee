import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "scss");

export function chefToScss(code: string): TranslationResult {
  return translateWithFallback("chef", "scss", code);
}

export const chefToScssRules = rules;
