import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("csharp", "scala");

export function csharpToScala(code: string): TranslationResult {
  return translateWithFallback("csharp", "scala", code);
}

export const csharpToScalaRules = rules;
