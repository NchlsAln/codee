import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "awk");

export function scssToAwk(code: string): TranslationResult {
  return translateWithFallback("scss", "awk", code);
}

export const scssToAwkRules = rules;
