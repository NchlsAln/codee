import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "sed");

export function htmlToSed(code: string): TranslationResult {
  return translateWithFallback("html", "sed", code);
}

export const htmlToSedRules = rules;
