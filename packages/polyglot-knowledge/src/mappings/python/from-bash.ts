import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "python");

export function bashToPython(code: string): TranslationResult {
  return translateWithFallback("bash", "python", code);
}

export const bashToPythonRules = rules;
