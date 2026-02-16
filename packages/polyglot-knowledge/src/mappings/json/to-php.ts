import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "php");

export function jsonToPhp(code: string): TranslationResult {
  return translateWithFallback("json", "php", code);
}

export const jsonToPhpRules = rules;
