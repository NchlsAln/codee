import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("go", "python");

export function goToPython(code: string): TranslationResult {
  return translateWithFallback("go", "python", code);
}

export const goToPythonRules = rules;
