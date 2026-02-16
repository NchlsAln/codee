import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "scala");

export function ansibleToScala(code: string): TranslationResult {
  return translateWithFallback("ansible", "scala", code);
}

export const ansibleToScalaRules = rules;
