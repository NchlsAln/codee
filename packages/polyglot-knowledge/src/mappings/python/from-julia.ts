import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "python");

export function juliaToPython(code: string): TranslationResult {
  return translateWithFallback("julia", "python", code);
}

export const juliaToPythonRules = rules;
