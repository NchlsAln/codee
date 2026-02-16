import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "scala");

export function puppetToScala(code: string): TranslationResult {
  return translateWithFallback("puppet", "scala", code);
}

export const puppetToScalaRules = rules;
