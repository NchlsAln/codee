import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dart", "scala");

export function dartToScala(code: string): TranslationResult {
  return translateWithFallback("dart", "scala", code);
}

export const dartToScalaRules = rules;
