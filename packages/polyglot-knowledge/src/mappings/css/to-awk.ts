import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "awk");

export function cssToAwk(code: string): TranslationResult {
  return translateWithFallback("css", "awk", code);
}

export const cssToAwkRules = rules;
