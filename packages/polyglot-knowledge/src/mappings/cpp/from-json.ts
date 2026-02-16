import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "cpp");

export function jsonToCpp(code: string): TranslationResult {
  return translateWithFallback("json", "cpp", code);
}

export const jsonToCppRules = rules;
