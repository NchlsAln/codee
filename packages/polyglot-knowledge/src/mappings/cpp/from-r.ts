import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "cpp");

export function rToCpp(code: string): TranslationResult {
  return translateWithFallback("r", "cpp", code);
}

export const rToCppRules = rules;
