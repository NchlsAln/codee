import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "nim");

export function htmlToNim(code: string): TranslationResult {
  return translateWithFallback("html", "nim", code);
}

export const htmlToNimRules = rules;
