import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "css");

export function dockerfileToCss(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "css", code);
}

export const dockerfileToCssRules = rules;
