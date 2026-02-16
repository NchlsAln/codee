import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "scss");

export function dockerfileToScss(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "scss", code);
}

export const dockerfileToScssRules = rules;
