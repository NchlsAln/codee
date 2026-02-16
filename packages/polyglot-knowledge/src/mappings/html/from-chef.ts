import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "html");

export function chefToHtml(code: string): TranslationResult {
  return translateWithFallback("chef", "html", code);
}

export const chefToHtmlRules = rules;
