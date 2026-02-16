import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ruby", "cpp");

export function rubyToCpp(code: string): TranslationResult {
  return translateWithFallback("ruby", "cpp", code);
}

export const rubyToCppRules = rules;
