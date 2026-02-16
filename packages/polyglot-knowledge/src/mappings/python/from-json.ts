import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "python");

export function jsonToPython(code: string): TranslationResult {
  return translateWithFallback("json", "python", code);
}

export const jsonToPythonRules = rules;
