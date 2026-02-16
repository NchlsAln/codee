import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "sed");

export function xmlToSed(code: string): TranslationResult {
  return translateWithFallback("xml", "sed", code);
}

export const xmlToSedRules = rules;
