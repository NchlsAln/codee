import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "scss");

export function puppetToScss(code: string): TranslationResult {
  return translateWithFallback("puppet", "scss", code);
}

export const puppetToScssRules = rules;
