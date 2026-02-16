import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("swift", "cpp");

export function swiftToCpp(code: string): TranslationResult {
  return translateWithFallback("swift", "cpp", code);
}

export const swiftToCppRules = rules;
