import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "r");

export function bashToR(code: string): TranslationResult {
  return translateWithFallback("bash", "r", code);
}

export const bashToRRules = rules;
