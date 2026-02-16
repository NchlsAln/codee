import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "swift");

export function dockerfileToSwift(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "swift", code);
}

export const dockerfileToSwiftRules = rules;
