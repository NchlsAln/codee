import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("csharp", "python");

export function csharpToPython(code: string): TranslationResult {
  return translateWithFallback("csharp", "python", code);
}

export const csharpToPythonRules = rules;
