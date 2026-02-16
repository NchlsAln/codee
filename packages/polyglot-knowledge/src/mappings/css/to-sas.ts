import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "sas");

export function cssToSas(code: string): TranslationResult {
  return translateWithFallback("css", "sas", code);
}

export const cssToSasRules = rules;
