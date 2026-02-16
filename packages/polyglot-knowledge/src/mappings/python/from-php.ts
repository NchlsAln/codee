import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("php", "python");

export function phpToPython(code: string): TranslationResult {
  return translateWithFallback("php", "python", code);
}

export const phpToPythonRules = rules;
