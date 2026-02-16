import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dart", "swift");

export function dartToSwift(code: string): TranslationResult {
  return translateWithFallback("dart", "swift", code);
}

export const dartToSwiftRules = rules;
