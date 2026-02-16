import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "kotlin");

export function htmlToKotlin(code: string): TranslationResult {
  return translateWithFallback("html", "kotlin", code);
}

export const htmlToKotlinRules = rules;
