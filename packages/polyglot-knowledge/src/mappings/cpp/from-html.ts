import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "cpp");

export function htmlToCpp(code: string): TranslationResult {
  return translateWithFallback("html", "cpp", code);
}

export const htmlToCppRules = rules;
