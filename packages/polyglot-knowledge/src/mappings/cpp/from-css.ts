import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "cpp");

export function cssToCpp(code: string): TranslationResult {
  return translateWithFallback("css", "cpp", code);
}

export const cssToCppRules = rules;
