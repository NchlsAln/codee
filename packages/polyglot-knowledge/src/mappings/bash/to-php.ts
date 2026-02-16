import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "php");

export function bashToPhp(code: string): TranslationResult {
  return translateWithFallback("bash", "php", code);
}

export const bashToPhpRules = rules;
