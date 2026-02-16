import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "html");

export function terraformToHtml(code: string): TranslationResult {
  return translateWithFallback("terraform", "html", code);
}

export const terraformToHtmlRules = rules;
