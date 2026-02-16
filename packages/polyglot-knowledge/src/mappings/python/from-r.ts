import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "python");

export function rToPython(code: string): TranslationResult {
  return translateWithFallback("r", "python", code);
}

export const rToPythonRules = rules;
