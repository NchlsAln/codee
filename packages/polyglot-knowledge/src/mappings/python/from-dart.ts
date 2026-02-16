import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dart", "python");

export function dartToPython(code: string): TranslationResult {
  return translateWithFallback("dart", "python", code);
}

export const dartToPythonRules = rules;
