import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "cpp");

export function puppetToCpp(code: string): TranslationResult {
  return translateWithFallback("puppet", "cpp", code);
}

export const puppetToCppRules = rules;
