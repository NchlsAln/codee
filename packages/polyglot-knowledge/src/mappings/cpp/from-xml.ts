import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "cpp");

export function xmlToCpp(code: string): TranslationResult {
  return translateWithFallback("xml", "cpp", code);
}

export const xmlToCppRules = rules;
