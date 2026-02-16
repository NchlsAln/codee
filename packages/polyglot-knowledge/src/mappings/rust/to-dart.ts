import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("rust", "dart");

export function rustToDart(code: string): TranslationResult {
  return translateWithFallback("rust", "dart", code);
}

export const rustToDartRules = rules;
