import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "rust",
    to: "php",
    steps: ["Map Actix/Axum handlers to Laravel/Slim controllers", "Convert tower middleware to PHP middleware stacks"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "rust",
    to: "php",
    steps: ["Translate Diesel/sqlx models to Eloquent models", "Map query builders to Eloquent/DB facade usage"]
  },
  {
    conceptId: "control-flow.async-await",
    from: "rust",
    to: "php",
    steps: ["Translate tokio async to ReactPHP/Swoole", "Convert async functions to callback-based flows"]
  },
  {
    conceptId: "paradigms.functional",
    from: "rust",
    to: "php",
    steps: ["Translate iterator chains to array_map/array_filter", "Use array_reduce for folds"]
  },
  {
    conceptId: "modules.packaging",
    from: "rust",
    to: "php",
    steps: ["Translate crate modules to Composer autoloading", "Map Cargo.toml deps to composer.json"]
  }
];

export function rustToPhp(code: string): TranslationResult {
  return translateWithEngine("rust", "php", code);
}

export const rustToPhpRules = rules;
