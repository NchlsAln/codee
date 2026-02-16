import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "bash");

export function scssToBash(code: string): TranslationResult {
  return translateWithFallback("scss", "bash", code);
}

export const scssToBashRules = rules;
