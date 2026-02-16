import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "python");

export function awkToPython(code: string): TranslationResult {
  return translateWithFallback("awk", "python", code);
}

export const awkToPythonRules = rules;
