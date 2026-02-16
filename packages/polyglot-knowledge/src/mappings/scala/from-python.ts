import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("python", "scala");

export function pythonToScala(code: string): TranslationResult {
  return translateWithFallback("python", "scala", code);
}

export const pythonToScalaRules = rules;
