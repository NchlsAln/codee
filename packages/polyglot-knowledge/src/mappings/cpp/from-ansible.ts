import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "cpp");

export function ansibleToCpp(code: string): TranslationResult {
  return translateWithFallback("ansible", "cpp", code);
}

export const ansibleToCppRules = rules;
