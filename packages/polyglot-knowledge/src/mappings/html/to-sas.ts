import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "sas");

export function htmlToSas(code: string): TranslationResult {
  return translateWithFallback("html", "sas", code);
}

export const htmlToSasRules = rules;
