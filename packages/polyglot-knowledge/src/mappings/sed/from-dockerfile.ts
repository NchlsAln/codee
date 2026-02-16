import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "sed");

export function dockerfileToSed(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "sed", code);
}

export const dockerfileToSedRules = rules;
