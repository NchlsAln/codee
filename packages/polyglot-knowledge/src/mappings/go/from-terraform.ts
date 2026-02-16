import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "go");

export function terraformToGo(code: string): TranslationResult {
  return translateWithFallback("terraform", "go", code);
}

export const terraformToGoRules = rules;
