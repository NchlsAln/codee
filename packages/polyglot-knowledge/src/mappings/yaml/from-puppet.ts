import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "yaml");

export function puppetToYaml(code: string): TranslationResult {
  return translateWithFallback("puppet", "yaml", code);
}

export const puppetToYamlRules = rules;
