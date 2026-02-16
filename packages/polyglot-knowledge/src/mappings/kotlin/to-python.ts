import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("kotlin", "python");

export function kotlinToPython(code: string): TranslationResult {
  return translateWithFallback("kotlin", "python", code);
}

export const kotlinToPythonRules = rules;
