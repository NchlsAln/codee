import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "cpp");

export function crystalToCpp(code: string): TranslationResult {
  return translateWithFallback("crystal", "cpp", code);
}

export const crystalToCppRules = rules;
