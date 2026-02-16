import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "python");

export function htmlToPython(code: string): TranslationResult {
  return translateWithFallback("html", "python", code);
}

export const htmlToPythonRules = rules;
