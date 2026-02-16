import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "r");

export function awkToR(code: string): TranslationResult {
  return translateWithFallback("awk", "r", code);
}

export const awkToRRules = rules;
