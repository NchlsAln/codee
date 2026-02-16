import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "xml");

export function chefToXml(code: string): TranslationResult {
  return translateWithFallback("chef", "xml", code);
}

export const chefToXmlRules = rules;
