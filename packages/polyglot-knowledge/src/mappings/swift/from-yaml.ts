import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "swift");

export function yamlToSwift(code: string): TranslationResult {
  return translateWithFallback("yaml", "swift", code);
}

export const yamlToSwiftRules = rules;
