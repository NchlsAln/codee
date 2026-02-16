import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "sas");

export function scssToSas(code: string): TranslationResult {
  return translateWithFallback("scss", "sas", code);
}

export const scssToSasRules = rules;
