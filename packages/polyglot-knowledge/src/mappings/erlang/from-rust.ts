import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "rust",
    to: "erlang",
    steps: ["Map Actix/Axum handlers to Cowboy/Webmachine handlers", "Translate middleware to handler pipelines"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "rust",
    to: "erlang",
    steps: ["Translate Diesel/sqlx models to Mnesia tables", "Map structs to records"]
  },
  {
    conceptId: "concurrency.patterns",
    from: "rust",
    to: "erlang",
    steps: ["Map tokio task supervision to OTP supervisors", "Translate channels to process mailboxes"]
  },
  {
    conceptId: "paradigms.functional",
    from: "rust",
    to: "erlang",
    steps: ["Translate iterator chains to lists:map/filter", "Use list comprehensions for transforms"]
  }
];

export function rustToErlang(code: string): TranslationResult {
  return translateWithEngine("rust", "erlang", code);
}

export const rustToErlangRules = rules;
