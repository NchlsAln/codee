import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "sas");

export function dockerfileToSas(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "sas", code);
}

export const dockerfileToSasRules = rules;
