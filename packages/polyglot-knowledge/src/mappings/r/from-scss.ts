import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "r");

export function scssToR(code: string): TranslationResult {
  return translateWithFallback("scss", "r", code);
}

export const scssToRRules = rules;
