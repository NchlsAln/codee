import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("go", "cpp");

export function goToCpp(code: string): TranslationResult {
  return translateWithFallback("go", "cpp", code);
}

export const goToCppRules = rules;
