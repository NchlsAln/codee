import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("rust", "go");

export function rustToGo(code: string): TranslationResult {
  return translateWithFallback("rust", "go", code);
}

export const rustToGoRules = rules;
