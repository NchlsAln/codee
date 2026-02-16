import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "php");

export function matlabToPhp(code: string): TranslationResult {
  return translateWithFallback("matlab", "php", code);
}

export const matlabToPhpRules = rules;
