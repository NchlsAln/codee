import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "cpp");

export function terraformToCpp(code: string): TranslationResult {
  return translateWithFallback("terraform", "cpp", code);
}

export const terraformToCppRules = rules;
