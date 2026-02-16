import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "swift");

export function terraformToSwift(code: string): TranslationResult {
  return translateWithFallback("terraform", "swift", code);
}

export const terraformToSwiftRules = rules;
