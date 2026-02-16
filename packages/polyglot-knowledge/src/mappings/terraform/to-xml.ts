import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "xml");

export function terraformToXml(code: string): TranslationResult {
  return translateWithFallback("terraform", "xml", code);
}

export const terraformToXmlRules = rules;
