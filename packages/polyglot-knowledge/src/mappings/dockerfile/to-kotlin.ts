import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "kotlin");

export function dockerfileToKotlin(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "kotlin", code);
}

export const dockerfileToKotlinRules = rules;
