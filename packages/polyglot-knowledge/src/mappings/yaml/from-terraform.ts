import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "yaml");

export function terraformToYaml(code: string): TranslationResult {
  return translateWithFallback("terraform", "yaml", code);
}

export const terraformToYamlRules = rules;
