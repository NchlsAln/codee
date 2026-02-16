import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "awk");

export function jsonToAwk(code: string): TranslationResult {
  return translateWithFallback("json", "awk", code);
}

export const jsonToAwkRules = rules;
