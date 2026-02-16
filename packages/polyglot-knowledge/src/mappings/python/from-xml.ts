import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "python");

export function xmlToPython(code: string): TranslationResult {
  return translateWithFallback("xml", "python", code);
}

export const xmlToPythonRules = rules;
