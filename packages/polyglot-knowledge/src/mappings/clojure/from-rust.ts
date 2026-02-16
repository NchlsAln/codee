import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "rust",
    to: "clojure",
    steps: ["Map Actix/Axum handlers to Ring/Compojure routes", "Translate tower middleware to Ring middleware"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "rust",
    to: "clojure",
    steps: ["Translate Diesel/sqlx to next.jdbc/HoneySQL", "Map query builder DSLs to SQL DSL functions"]
  },
  {
    conceptId: "concurrency.channel",
    from: "rust",
    to: "clojure",
    steps: ["Map Rust channels to core.async channels", "Translate async tasks to go blocks"]
  },
  {
    conceptId: "paradigms.functional",
    from: "rust",
    to: "clojure",
    steps: ["Translate iterator chains to map/filter/reduce", "Use threading macros for pipelines"]
  }
];

export function rustToClojure(code: string): TranslationResult {
  return translateWithEngine("rust", "clojure", code);
}

export const rustToClojureRules = rules;
