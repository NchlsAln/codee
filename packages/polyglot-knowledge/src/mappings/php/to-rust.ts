import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "php",
    to: "rust",
    steps: ["Map Laravel/Symfony controllers to Actix/Axum handlers", "Convert middleware to tower middleware layers"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "php",
    to: "rust",
    steps: ["Translate Eloquent models to Diesel or sqlx models", "Map query builder chains to query DSL or sqlx macros"]
  },
  {
    conceptId: "control-flow.async-await",
    from: "php",
    to: "rust",
    steps: ["Translate async PHP libraries to tokio async/await", "Replace callbacks with async functions"]
  },
  {
    conceptId: "paradigms.functional",
    from: "php",
    to: "rust",
    steps: ["Translate array_map/array_filter to iterator map/filter", "Use fold for reductions"]
  },
  {
    conceptId: "modules.packaging",
    from: "php",
    to: "rust",
    steps: ["Translate Composer autoloading to crate modules", "Map composer.json deps to Cargo.toml"]
  }
];

export function phpToRust(code: string): TranslationResult {
  return translateWithEngine("php", "rust", code);
}

export const phpToRustRules = rules;
