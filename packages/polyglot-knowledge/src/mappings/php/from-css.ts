import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "php");

export function cssToPhp(code: string): TranslationResult {
  return translateWithFallback("css", "php", code);
}

export const cssToPhpRules = rules;
