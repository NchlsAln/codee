import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "php");

export function crystalToPhp(code: string): TranslationResult {
  return translateWithFallback("crystal", "php", code);
}

export const crystalToPhpRules = rules;
