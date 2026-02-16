import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "cpp");

export function bashToCpp(code: string): TranslationResult {
  return translateWithFallback("bash", "cpp", code);
}

export const bashToCppRules = rules;
