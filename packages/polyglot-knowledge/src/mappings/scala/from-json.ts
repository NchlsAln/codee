import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "scala");

export function jsonToScala(code: string): TranslationResult {
  return translateWithFallback("json", "scala", code);
}

export const jsonToScalaRules = rules;
