import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "python");

export function ansibleToPython(code: string): TranslationResult {
  return translateWithFallback("ansible", "python", code);
}

export const ansibleToPythonRules = rules;
