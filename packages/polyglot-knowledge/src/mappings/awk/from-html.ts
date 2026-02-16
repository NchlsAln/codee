import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "awk");

export function htmlToAwk(code: string): TranslationResult {
  return translateWithFallback("html", "awk", code);
}

export const htmlToAwkRules = rules;
