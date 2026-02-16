import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "rust",
    to: "elixir",
    steps: ["Map Actix/Axum handlers to Phoenix controllers", "Translate tower middleware to Plug pipelines"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "rust",
    to: "elixir",
    steps: ["Translate sqlx/Diesel models to Ecto schemas", "Map query builders to Ecto queries"]
  },
  {
    conceptId: "concurrency.actor",
    from: "rust",
    to: "elixir",
    steps: ["Translate actors to GenServer", "Map supervision trees to OTP supervisors"]
  },
  {
    conceptId: "paradigms.functional",
    from: "rust",
    to: "elixir",
    steps: ["Translate iterator chains to Enum pipelines", "Use Enum.reduce for folds"]
  }
];

export function rustToElixir(code: string): TranslationResult {
  return translateWithEngine("rust", "elixir", code);
}

export const rustToElixirRules = rules;
