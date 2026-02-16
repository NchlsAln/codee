import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ruby", "go");

export function rubyToGo(code: string): TranslationResult {
  return translateWithFallback("ruby", "go", code);
}

export const rubyToGoRules = rules;
