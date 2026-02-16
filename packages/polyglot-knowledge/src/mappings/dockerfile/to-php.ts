import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "php");

export function dockerfileToPhp(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "php", code);
}

export const dockerfileToPhpRules = rules;
