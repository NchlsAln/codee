import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "r");

export function jsonToR(code: string): TranslationResult {
  return translateWithFallback("json", "r", code);
}

export const jsonToRRules = rules;
