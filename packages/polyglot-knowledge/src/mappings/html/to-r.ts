import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "r");

export function htmlToR(code: string): TranslationResult {
  return translateWithFallback("html", "r", code);
}

export const htmlToRRules = rules;
