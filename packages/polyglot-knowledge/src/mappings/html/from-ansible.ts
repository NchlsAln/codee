import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "html");

export function ansibleToHtml(code: string): TranslationResult {
  return translateWithFallback("ansible", "html", code);
}

export const ansibleToHtmlRules = rules;
