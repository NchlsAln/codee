import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "python");

export function sqlToPython(code: string): TranslationResult {
  return translateWithFallback("sql", "python", code);
}

export const sqlToPythonRules = rules;
