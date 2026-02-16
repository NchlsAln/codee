import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "python");

export function nimToPython(code: string): TranslationResult {
  return translateWithFallback("nim", "python", code);
}

export const nimToPythonRules = rules;
