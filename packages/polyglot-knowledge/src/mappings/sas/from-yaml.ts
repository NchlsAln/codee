import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "sas");

export function yamlToSas(code: string): TranslationResult {
  return translateWithFallback("yaml", "sas", code);
}

export const yamlToSasRules = rules;
