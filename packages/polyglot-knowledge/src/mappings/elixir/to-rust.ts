import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "elixir",
    to: "rust",
    steps: ["Map Phoenix LiveView to Leptos views", "Translate Plug pipelines to tower middleware layers"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "elixir",
    to: "rust",
    steps: ["Translate Ecto schemas to Diesel or sqlx models", "Map changesets to validation layers"]
  },
  {
    conceptId: "concurrency.actor",
    from: "elixir",
    to: "rust",
    steps: ["Translate GenServer to actor frameworks", "Map supervision to supervisor trees or task groups"]
  },
  {
    conceptId: "paradigms.functional",
    from: "elixir",
    to: "rust",
    steps: ["Translate Enum pipelines to iterator chains", "Use fold for reductions"]
  }
];

export function elixirToRust(code: string): TranslationResult {
  return translateWithEngine("elixir", "rust", code);
}

export const elixirToRustRules = rules;
