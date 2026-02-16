import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "python");

export function chefToPython(code: string): TranslationResult {
  return translateWithFallback("chef", "python", code);
}

export const chefToPythonRules = rules;
