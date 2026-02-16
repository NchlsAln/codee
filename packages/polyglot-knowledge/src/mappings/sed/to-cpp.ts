import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "cpp");

export function sedToCpp(code: string): TranslationResult {
  return translateWithFallback("sed", "cpp", code);
}

export const sedToCppRules = rules;
