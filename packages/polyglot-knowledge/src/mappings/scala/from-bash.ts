import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "scala");

export function bashToScala(code: string): TranslationResult {
  return translateWithFallback("bash", "scala", code);
}

export const bashToScalaRules = rules;
