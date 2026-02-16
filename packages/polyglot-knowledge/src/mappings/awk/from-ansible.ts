import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "awk");

export function ansibleToAwk(code: string): TranslationResult {
  return translateWithFallback("ansible", "awk", code);
}

export const ansibleToAwkRules = rules;
