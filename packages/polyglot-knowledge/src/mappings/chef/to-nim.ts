import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "nim");

export function chefToNim(code: string): TranslationResult {
  return translateWithFallback("chef", "nim", code);
}

export const chefToNimRules = rules;
