import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "kotlin");

export function yamlToKotlin(code: string): TranslationResult {
  return translateWithFallback("yaml", "kotlin", code);
}

export const yamlToKotlinRules = rules;
