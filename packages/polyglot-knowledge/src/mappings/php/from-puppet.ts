import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "php");

export function puppetToPhp(code: string): TranslationResult {
  return translateWithFallback("puppet", "php", code);
}

export const puppetToPhpRules = rules;
