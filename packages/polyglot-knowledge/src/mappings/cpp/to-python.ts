import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("cpp", "python");

export function cppToPython(code: string): TranslationResult {
  return translateWithFallback("cpp", "python", code);
}

export const cppToPythonRules = rules;
