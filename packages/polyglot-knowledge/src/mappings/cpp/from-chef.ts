import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "cpp");

export function chefToCpp(code: string): TranslationResult {
  return translateWithFallback("chef", "cpp", code);
}

export const chefToCppRules = rules;
