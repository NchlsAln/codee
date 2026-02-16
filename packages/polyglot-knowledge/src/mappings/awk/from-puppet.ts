import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "awk");

export function puppetToAwk(code: string): TranslationResult {
  return translateWithFallback("puppet", "awk", code);
}

export const puppetToAwkRules = rules;
