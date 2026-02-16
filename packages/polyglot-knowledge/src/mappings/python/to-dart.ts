import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("python", "dart");

export function pythonToDart(code: string): TranslationResult {
  return translateWithFallback("python", "dart", code);
}

export const pythonToDartRules = rules;
