import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "scala");

export function yamlToScala(code: string): TranslationResult {
  return translateWithFallback("yaml", "scala", code);
}

export const yamlToScalaRules = rules;
