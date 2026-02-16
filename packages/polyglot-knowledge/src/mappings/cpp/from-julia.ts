import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "cpp");

export function juliaToCpp(code: string): TranslationResult {
  return translateWithFallback("julia", "cpp", code);
}

export const juliaToCppRules = rules;
