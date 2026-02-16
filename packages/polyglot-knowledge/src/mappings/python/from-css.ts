import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "python");

export function cssToPython(code: string): TranslationResult {
  return translateWithFallback("css", "python", code);
}

export const cssToPythonRules = rules;
