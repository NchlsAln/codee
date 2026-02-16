import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "sas");

export function awkToSas(code: string): TranslationResult {
  return translateWithFallback("awk", "sas", code);
}

export const awkToSasRules = rules;
