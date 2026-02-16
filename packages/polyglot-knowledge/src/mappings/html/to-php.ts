import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "php");

export function htmlToPhp(code: string): TranslationResult {
  return translateWithFallback("html", "php", code);
}

export const htmlToPhpRules = rules;
