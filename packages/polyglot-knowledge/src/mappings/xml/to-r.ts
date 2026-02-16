import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "r");

export function xmlToR(code: string): TranslationResult {
  return translateWithFallback("xml", "r", code);
}

export const xmlToRRules = rules;
