import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "sed");

export function cssToSed(code: string): TranslationResult {
  return translateWithFallback("css", "sed", code);
}

export const cssToSedRules = rules;
