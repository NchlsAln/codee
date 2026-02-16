import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "php");

export function awkToPhp(code: string): TranslationResult {
  return translateWithFallback("awk", "php", code);
}

export const awkToPhpRules = rules;
