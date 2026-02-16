import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "php");

export function xmlToPhp(code: string): TranslationResult {
  return translateWithFallback("xml", "php", code);
}

export const xmlToPhpRules = rules;
