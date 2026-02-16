import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("cpp", "scala");

export function cppToScala(code: string): TranslationResult {
  return translateWithFallback("cpp", "scala", code);
}

export const cppToScalaRules = rules;
