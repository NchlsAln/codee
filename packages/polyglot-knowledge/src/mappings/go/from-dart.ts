import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dart", "go");

export function dartToGo(code: string): TranslationResult {
  return translateWithFallback("dart", "go", code);
}

export const dartToGoRules = rules;
