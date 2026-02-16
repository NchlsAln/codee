import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("java", "python");

export function javaToPython(code: string): TranslationResult {
  return translateWithFallback("java", "python", code);
}

export const javaToPythonRules = rules;
