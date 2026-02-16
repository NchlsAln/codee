import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "python");

export function puppetToPython(code: string): TranslationResult {
  return translateWithFallback("puppet", "python", code);
}

export const puppetToPythonRules = rules;
