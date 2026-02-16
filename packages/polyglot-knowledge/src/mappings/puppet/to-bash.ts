import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "bash");

export function puppetToBash(code: string): TranslationResult {
  return translateWithFallback("puppet", "bash", code);
}

export const puppetToBashRules = rules;
