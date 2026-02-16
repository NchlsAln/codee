import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "dart");

export function chefToDart(code: string): TranslationResult {
  return translateWithFallback("chef", "dart", code);
}

export const chefToDartRules = rules;
