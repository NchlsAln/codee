import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "css");

export function chefToCss(code: string): TranslationResult {
  return translateWithFallback("chef", "css", code);
}

export const chefToCssRules = rules;
