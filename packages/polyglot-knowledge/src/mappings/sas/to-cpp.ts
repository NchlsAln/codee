import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "cpp");

export function sasToCpp(code: string): TranslationResult {
  return translateWithFallback("sas", "cpp", code);
}

export const sasToCppRules = rules;
