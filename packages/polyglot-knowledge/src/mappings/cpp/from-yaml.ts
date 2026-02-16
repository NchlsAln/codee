import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "cpp");

export function yamlToCpp(code: string): TranslationResult {
  return translateWithFallback("yaml", "cpp", code);
}

export const yamlToCppRules = rules;
