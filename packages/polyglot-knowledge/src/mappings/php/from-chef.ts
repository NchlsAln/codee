import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "php");

export function chefToPhp(code: string): TranslationResult {
  return translateWithFallback("chef", "php", code);
}

export const chefToPhpRules = rules;
