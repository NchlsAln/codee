import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "cpp");

export function zigToCpp(code: string): TranslationResult {
  return translateWithFallback("zig", "cpp", code);
}

export const zigToCppRules = rules;
