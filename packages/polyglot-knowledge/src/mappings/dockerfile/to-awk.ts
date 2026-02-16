import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "awk");

export function dockerfileToAwk(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "awk", code);
}

export const dockerfileToAwkRules = rules;
