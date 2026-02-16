import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "dart");

export function scssToDart(code: string): TranslationResult {
  return translateWithFallback("scss", "dart", code);
}

export const scssToDartRules = rules;
