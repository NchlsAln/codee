import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "zig");

export function yamlToZig(code: string): TranslationResult {
  return translateWithFallback("yaml", "zig", code);
}

export const yamlToZigRules = rules;
