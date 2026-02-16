import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dart", "cpp");

export function dartToCpp(code: string): TranslationResult {
  return translateWithFallback("dart", "cpp", code);
}

export const dartToCppRules = rules;
