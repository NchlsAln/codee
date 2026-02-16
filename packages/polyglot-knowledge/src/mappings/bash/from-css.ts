import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "bash");

export function cssToBash(code: string): TranslationResult {
  return translateWithFallback("css", "bash", code);
}

export const cssToBashRules = rules;
