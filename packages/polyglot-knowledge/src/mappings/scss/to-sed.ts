import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "sed");

export function scssToSed(code: string): TranslationResult {
  return translateWithFallback("scss", "sed", code);
}

export const scssToSedRules = rules;
