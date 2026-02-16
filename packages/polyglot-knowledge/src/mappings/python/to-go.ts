import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("python", "go");

export function pythonToGo(code: string): TranslationResult {
  return translateWithFallback("python", "go", code);
}

export const pythonToGoRules = rules;
