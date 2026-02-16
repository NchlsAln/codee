import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("cpp", "dart");

export function cppToDart(code: string): TranslationResult {
  return translateWithFallback("cpp", "dart", code);
}

export const cppToDartRules = rules;
