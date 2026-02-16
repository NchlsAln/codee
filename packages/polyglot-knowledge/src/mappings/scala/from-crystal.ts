import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "scala");

export function crystalToScala(code: string): TranslationResult {
  return translateWithFallback("crystal", "scala", code);
}

export const crystalToScalaRules = rules;
