import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("rust", "python");

export function rustToPython(code: string): TranslationResult {
  return translateWithFallback("rust", "python", code);
}

export const rustToPythonRules = rules;
