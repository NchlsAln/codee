import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "sed");

export function jsonToSed(code: string): TranslationResult {
  return translateWithFallback("json", "sed", code);
}

export const jsonToSedRules = rules;
