import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "ruby",
    to: "rust",
    steps: ["Map Rails controllers to Actix/Axum handlers", "Translate Sinatra routes to Axum router handlers"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "ruby",
    to: "rust",
    steps: ["Translate ActiveRecord models to sqlx or Diesel", "Map scopes to query builder patterns"]
  },
  {
    conceptId: "control-flow.async-await",
    from: "ruby",
    to: "rust",
    steps: ["Translate Ruby async flows to tokio async/await", "Convert blocks to async closures"]
  },
  {
    conceptId: "paradigms.functional",
    from: "ruby",
    to: "rust",
    steps: ["Translate map/select/reduce to iterator map/filter/fold", "Use iterators for lazy pipelines"]
  },
  {
    conceptId: "paradigms.closures",
    from: "ruby",
    to: "rust",
    steps: ["Translate blocks/yield to Rust closures", "Use Fn/FnMut traits appropriately"]
  }
];

export function rubyToRust(code: string): TranslationResult {
  return translateWithEngine("ruby", "rust", code);
}

export const rubyToRustRules = rules;
