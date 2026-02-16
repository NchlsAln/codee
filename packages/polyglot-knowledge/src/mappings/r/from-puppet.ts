import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "r");

export function puppetToR(code: string): TranslationResult {
  return translateWithFallback("puppet", "r", code);
}

export const puppetToRRules = rules;
