import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ruby", "python");

export function rubyToPython(code: string): TranslationResult {
  return translateWithFallback("ruby", "python", code);
}

export const rubyToPythonRules = rules;
