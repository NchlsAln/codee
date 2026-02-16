import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "css");

export function terraformToCss(code: string): TranslationResult {
  return translateWithFallback("terraform", "css", code);
}

export const terraformToCssRules = rules;
