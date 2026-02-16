import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("csharp", "cpp");

export function csharpToCpp(code: string): TranslationResult {
  return translateWithFallback("csharp", "cpp", code);
}

export const csharpToCppRules = rules;
