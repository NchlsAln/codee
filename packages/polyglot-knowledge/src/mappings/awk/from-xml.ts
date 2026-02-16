import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "awk");

export function xmlToAwk(code: string): TranslationResult {
  return translateWithFallback("xml", "awk", code);
}

export const xmlToAwkRules = rules;
