import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "bash");

export function htmlToBash(code: string): TranslationResult {
  return translateWithFallback("html", "bash", code);
}

export const htmlToBashRules = rules;
