import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "json");

export function chefToJson(code: string): TranslationResult {
  return translateWithFallback("chef", "json", code);
}

export const chefToJsonRules = rules;
