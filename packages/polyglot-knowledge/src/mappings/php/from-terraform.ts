import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "php");

export function terraformToPhp(code: string): TranslationResult {
  return translateWithFallback("terraform", "php", code);
}

export const terraformToPhpRules = rules;
