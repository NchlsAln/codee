import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "r");

export function cssToR(code: string): TranslationResult {
  return translateWithFallback("css", "r", code);
}

export const cssToRRules = rules;
