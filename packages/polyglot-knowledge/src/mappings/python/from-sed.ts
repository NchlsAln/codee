import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "python");

export function sedToPython(code: string): TranslationResult {
  return translateWithFallback("sed", "python", code);
}

export const sedToPythonRules = rules;
