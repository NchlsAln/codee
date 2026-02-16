import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "swift");

export function sasToSwift(code: string): TranslationResult {
  return translateWithFallback("sas", "swift", code);
}

export const sasToSwiftRules = rules;
