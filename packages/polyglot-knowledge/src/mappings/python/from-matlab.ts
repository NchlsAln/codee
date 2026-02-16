import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "python");

export function matlabToPython(code: string): TranslationResult {
  return translateWithFallback("matlab", "python", code);
}

export const matlabToPythonRules = rules;
