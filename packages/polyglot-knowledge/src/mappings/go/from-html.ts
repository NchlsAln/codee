import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "go");

export function htmlToGo(code: string): TranslationResult {
  return translateWithFallback("html", "go", code);
}

export const htmlToGoRules = rules;
