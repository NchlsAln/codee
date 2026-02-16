import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "scala");

export function htmlToScala(code: string): TranslationResult {
  return translateWithFallback("html", "scala", code);
}

export const htmlToScalaRules = rules;
