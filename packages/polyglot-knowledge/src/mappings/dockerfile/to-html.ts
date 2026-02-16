import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "html");

export function dockerfileToHtml(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "html", code);
}

export const dockerfileToHtmlRules = rules;
