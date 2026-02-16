import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("typescript", "scala");

export function typescriptToScala(code: string): TranslationResult {
  return translateWithFallback("typescript", "scala", code);
}

export const typescriptToScalaRules = rules;
