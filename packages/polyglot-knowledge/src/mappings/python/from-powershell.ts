import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "python");

export function powershellToPython(code: string): TranslationResult {
  return translateWithFallback("powershell", "python", code);
}

export const powershellToPythonRules = rules;
