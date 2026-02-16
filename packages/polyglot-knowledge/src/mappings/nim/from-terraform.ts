import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "nim");

export function terraformToNim(code: string): TranslationResult {
  return translateWithFallback("terraform", "nim", code);
}

export const terraformToNimRules = rules;
