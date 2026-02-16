import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "php");

export function sasToPhp(code: string): TranslationResult {
  return translateWithFallback("sas", "php", code);
}

export const sasToPhpRules = rules;
