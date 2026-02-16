import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "python");

export function crystalToPython(code: string): TranslationResult {
  return translateWithFallback("crystal", "python", code);
}

export const crystalToPythonRules = rules;
