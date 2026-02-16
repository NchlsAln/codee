import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "dart");

export function terraformToDart(code: string): TranslationResult {
  return translateWithFallback("terraform", "dart", code);
}

export const terraformToDartRules = rules;
