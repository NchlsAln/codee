import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "go");

export function yamlToGo(code: string): TranslationResult {
  return translateWithFallback("yaml", "go", code);
}

export const yamlToGoRules = rules;
