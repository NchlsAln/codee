import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "cpp");

export function awkToCpp(code: string): TranslationResult {
  return translateWithFallback("awk", "cpp", code);
}

export const awkToCppRules = rules;
