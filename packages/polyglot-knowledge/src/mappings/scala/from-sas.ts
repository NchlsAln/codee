import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "scala");

export function sasToScala(code: string): TranslationResult {
  return translateWithFallback("sas", "scala", code);
}

export const sasToScalaRules = rules;
