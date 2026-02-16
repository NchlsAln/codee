import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "scss");

export function terraformToScss(code: string): TranslationResult {
  return translateWithFallback("terraform", "scss", code);
}

export const terraformToScssRules = rules;
