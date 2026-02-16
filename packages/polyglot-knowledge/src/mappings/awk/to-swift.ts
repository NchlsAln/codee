import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "swift");

export function awkToSwift(code: string): TranslationResult {
  return translateWithFallback("awk", "swift", code);
}

export const awkToSwiftRules = rules;
