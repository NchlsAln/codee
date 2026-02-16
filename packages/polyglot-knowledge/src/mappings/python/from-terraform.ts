import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "python");

export function terraformToPython(code: string): TranslationResult {
  return translateWithFallback("terraform", "python", code);
}

export const terraformToPythonRules = rules;
