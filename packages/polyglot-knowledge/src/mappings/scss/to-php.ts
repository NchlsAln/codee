import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "php");

export function scssToPhp(code: string): TranslationResult {
  return translateWithFallback("scss", "php", code);
}

export const scssToPhpRules = rules;
