import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "go");

export function sasToGo(code: string): TranslationResult {
  return translateWithFallback("sas", "go", code);
}

export const sasToGoRules = rules;
