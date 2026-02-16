import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "dart");

export function yamlToDart(code: string): TranslationResult {
  return translateWithFallback("yaml", "dart", code);
}

export const yamlToDartRules = rules;
