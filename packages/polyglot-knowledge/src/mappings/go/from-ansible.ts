import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "go");

export function ansibleToGo(code: string): TranslationResult {
  return translateWithFallback("ansible", "go", code);
}

export const ansibleToGoRules = rules;
