import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "nim");

export function sasToNim(code: string): TranslationResult {
  return translateWithFallback("sas", "nim", code);
}

export const sasToNimRules = rules;
