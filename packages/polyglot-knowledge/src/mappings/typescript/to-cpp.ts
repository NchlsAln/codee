import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("typescript", "cpp");

export function typescriptToCpp(code: string): TranslationResult {
  return translateWithFallback("typescript", "cpp", code);
}

export const typescriptToCppRules = rules;
