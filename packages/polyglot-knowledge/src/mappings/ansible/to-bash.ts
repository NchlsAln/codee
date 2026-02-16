import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "bash");

export function ansibleToBash(code: string): TranslationResult {
  return translateWithFallback("ansible", "bash", code);
}

export const ansibleToBashRules = rules;
