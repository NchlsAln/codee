import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scala", "python");

export function scalaToPython(code: string): TranslationResult {
  return translateWithFallback("scala", "python", code);
}

export const scalaToPythonRules = rules;
