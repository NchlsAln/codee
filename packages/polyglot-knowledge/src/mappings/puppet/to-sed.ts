import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "sed");

export function puppetToSed(code: string): TranslationResult {
  return translateWithFallback("puppet", "sed", code);
}

export const puppetToSedRules = rules;
