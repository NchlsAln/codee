import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "java");

export function haskellToJava(code: string): TranslationResult {
  return translateWithFallback("haskell", "java", code);
}

export const haskellToJavaRules = rules;
