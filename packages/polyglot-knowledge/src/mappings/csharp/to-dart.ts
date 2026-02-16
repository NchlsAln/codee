import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("csharp", "dart");

export function csharpToDart(code: string): TranslationResult {
  return translateWithFallback("csharp", "dart", code);
}

export const csharpToDartRules = rules;
