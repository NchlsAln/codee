import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "sed");

export function ansibleToSed(code: string): TranslationResult {
  return translateWithFallback("ansible", "sed", code);
}

export const ansibleToSedRules = rules;
