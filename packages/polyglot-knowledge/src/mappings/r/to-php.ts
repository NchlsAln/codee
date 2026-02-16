import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "php");

export function rToPhp(code: string): TranslationResult {
  return translateWithFallback("r", "php", code);
}

export const rToPhpRules = rules;
