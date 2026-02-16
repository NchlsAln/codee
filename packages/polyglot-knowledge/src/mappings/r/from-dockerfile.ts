import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "r");

export function dockerfileToR(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "r", code);
}

export const dockerfileToRRules = rules;
