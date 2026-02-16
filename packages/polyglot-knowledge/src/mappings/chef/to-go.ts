import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "go");

export function chefToGo(code: string): TranslationResult {
  return translateWithFallback("chef", "go", code);
}

export const chefToGoRules = rules;
