import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "php");

export function juliaToPhp(code: string): TranslationResult {
  return translateWithFallback("julia", "php", code);
}

export const juliaToPhpRules = rules;
