import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "cpp");

export function nimToCpp(code: string): TranslationResult {
  return translateWithFallback("nim", "cpp", code);
}

export const nimToCppRules = rules;
