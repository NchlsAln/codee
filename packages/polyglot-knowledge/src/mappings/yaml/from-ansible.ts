import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "yaml");

export function ansibleToYaml(code: string): TranslationResult {
  return translateWithFallback("ansible", "yaml", code);
}

export const ansibleToYamlRules = rules;
