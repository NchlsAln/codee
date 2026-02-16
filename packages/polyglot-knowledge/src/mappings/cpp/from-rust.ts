import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("rust", "cpp");

export function rustToCpp(code: string): TranslationResult {
  return translateWithFallback("rust", "cpp", code);
}

export const rustToCppRules = rules;
