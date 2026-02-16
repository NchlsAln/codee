import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "scala");

export function zigToScala(code: string): TranslationResult {
  return translateWithFallback("zig", "scala", code);
}

export const zigToScalaRules = rules;
