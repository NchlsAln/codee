import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("php", "cpp");

export function phpToCpp(code: string): TranslationResult {
  return translateWithFallback("php", "cpp", code);
}

export const phpToCppRules = rules;
