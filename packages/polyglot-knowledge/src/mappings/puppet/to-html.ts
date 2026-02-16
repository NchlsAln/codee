import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "html");

export function puppetToHtml(code: string): TranslationResult {
  return translateWithFallback("puppet", "html", code);
}

export const puppetToHtmlRules = rules;
