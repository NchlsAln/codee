import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "sas");

export function puppetToSas(code: string): TranslationResult {
  return translateWithFallback("puppet", "sas", code);
}

export const puppetToSasRules = rules;
