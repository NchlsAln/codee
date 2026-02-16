import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "json");

export function terraformToJson(code: string): TranslationResult {
  return translateWithFallback("terraform", "json", code);
}

export const terraformToJsonRules = rules;
