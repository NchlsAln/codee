import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "python");

export function sasToPython(code: string): TranslationResult {
  return translateWithFallback("sas", "python", code);
}

export const sasToPythonRules = rules;
