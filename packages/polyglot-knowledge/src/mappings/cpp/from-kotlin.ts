import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("kotlin", "cpp");

export function kotlinToCpp(code: string): TranslationResult {
  return translateWithFallback("kotlin", "cpp", code);
}

export const kotlinToCppRules = rules;
