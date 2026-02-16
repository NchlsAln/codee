import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ruby", "dart");

export function rubyToDart(code: string): TranslationResult {
  return translateWithFallback("ruby", "dart", code);
}

export const rubyToDartRules = rules;
