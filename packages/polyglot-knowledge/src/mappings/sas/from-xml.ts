import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "sas");

export function xmlToSas(code: string): TranslationResult {
  return translateWithFallback("xml", "sas", code);
}

export const xmlToSasRules = rules;
