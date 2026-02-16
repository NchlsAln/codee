import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "bash");

export function terraformToBash(code: string): TranslationResult {
  return translateWithFallback("terraform", "bash", code);
}

export const terraformToBashRules = rules;
