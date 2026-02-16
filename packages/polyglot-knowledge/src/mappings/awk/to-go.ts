import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "go");

export function awkToGo(code: string): TranslationResult {
  return translateWithFallback("awk", "go", code);
}

export const awkToGoRules = rules;
