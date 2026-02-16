import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "cpp");

export function scssToCpp(code: string): TranslationResult {
  return translateWithFallback("scss", "cpp", code);
}

export const scssToCppRules = rules;
