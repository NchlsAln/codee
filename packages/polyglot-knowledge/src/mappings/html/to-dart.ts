import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "dart");

export function htmlToDart(code: string): TranslationResult {
  return translateWithFallback("html", "dart", code);
}

export const htmlToDartRules = rules;
