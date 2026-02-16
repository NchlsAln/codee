import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("typescript", "python");

export function typescriptToPython(code: string): TranslationResult {
  return translateWithFallback("typescript", "python", code);
}

export const typescriptToPythonRules = rules;
