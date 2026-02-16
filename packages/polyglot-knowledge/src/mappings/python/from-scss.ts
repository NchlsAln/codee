import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "python");

export function scssToPython(code: string): TranslationResult {
  return translateWithFallback("scss", "python", code);
}

export const scssToPythonRules = rules;
