import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "go");

export function dockerfileToGo(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "go", code);
}

export const dockerfileToGoRules = rules;
