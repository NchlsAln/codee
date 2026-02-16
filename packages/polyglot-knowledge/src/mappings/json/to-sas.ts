import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "sas");

export function jsonToSas(code: string): TranslationResult {
  return translateWithFallback("json", "sas", code);
}

export const jsonToSasRules = rules;
