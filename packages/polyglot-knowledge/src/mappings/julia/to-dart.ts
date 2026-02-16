import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "dart");

export function juliaToDart(code: string): TranslationResult {
  return translateWithFallback("julia", "dart", code);
}

export const juliaToDartRules = rules;
