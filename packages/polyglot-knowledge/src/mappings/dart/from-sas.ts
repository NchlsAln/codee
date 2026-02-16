import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "dart");

export function sasToDart(code: string): TranslationResult {
  return translateWithFallback("sas", "dart", code);
}

export const sasToDartRules = rules;
