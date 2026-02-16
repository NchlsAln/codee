import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "scala");

export function xmlToScala(code: string): TranslationResult {
  return translateWithFallback("xml", "scala", code);
}

export const xmlToScalaRules = rules;
