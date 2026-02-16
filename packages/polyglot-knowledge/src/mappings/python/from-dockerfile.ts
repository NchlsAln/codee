import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "python");

export function dockerfileToPython(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "python", code);
}

export const dockerfileToPythonRules = rules;
