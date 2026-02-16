import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "sas");

export function bashToSas(code: string): TranslationResult {
  return translateWithFallback("bash", "sas", code);
}

export const bashToSasRules = rules;
