import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "scala");

export function cssToScala(code: string): TranslationResult {
  return translateWithFallback("css", "scala", code);
}

export const cssToScalaRules = rules;
