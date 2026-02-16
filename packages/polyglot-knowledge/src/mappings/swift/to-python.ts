import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("swift", "python");

export function swiftToPython(code: string): TranslationResult {
  return translateWithFallback("swift", "python", code);
}

export const swiftToPythonRules = rules;
