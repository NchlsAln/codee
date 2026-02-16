import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "nim");

export function yamlToNim(code: string): TranslationResult {
  return translateWithFallback("yaml", "nim", code);
}

export const yamlToNimRules = rules;
