import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "sas");

export function ansibleToSas(code: string): TranslationResult {
  return translateWithFallback("ansible", "sas", code);
}

export const ansibleToSasRules = rules;
