import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "css");

export function puppetToCss(code: string): TranslationResult {
  return translateWithFallback("puppet", "css", code);
}

export const puppetToCssRules = rules;
