import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "python");

export function yamlToPython(code: string): TranslationResult {
  return translateWithFallback("yaml", "python", code);
}

export const yamlToPythonRules = rules;
