import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scala", "cpp");

export function scalaToCpp(code: string): TranslationResult {
  return translateWithFallback("scala", "cpp", code);
}

export const scalaToCppRules = rules;
