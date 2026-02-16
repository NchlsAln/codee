import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "cpp");

export function dockerfileToCpp(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "cpp", code);
}

export const dockerfileToCppRules = rules;
