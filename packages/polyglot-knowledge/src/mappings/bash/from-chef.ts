import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "bash");

export function chefToBash(code: string): TranslationResult {
  return translateWithFallback("chef", "bash", code);
}

export const chefToBashRules = rules;
