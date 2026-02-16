import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "scala");

export function dockerfileToScala(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "scala", code);
}

export const dockerfileToScalaRules = rules;
