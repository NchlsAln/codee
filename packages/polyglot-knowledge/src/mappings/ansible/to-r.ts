import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "r");

export function ansibleToR(code: string): TranslationResult {
  return translateWithFallback("ansible", "r", code);
}

export const ansibleToRRules = rules;
