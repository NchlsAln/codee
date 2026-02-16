import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "swift");

export function chefToSwift(code: string): TranslationResult {
  return translateWithFallback("chef", "swift", code);
}

export const chefToSwiftRules = rules;
