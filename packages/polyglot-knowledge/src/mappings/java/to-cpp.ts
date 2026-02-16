import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("java", "cpp");

export function javaToCpp(code: string): TranslationResult {
  return translateWithFallback("java", "cpp", code);
}

export const javaToCppRules = rules;
