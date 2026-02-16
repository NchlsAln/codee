"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirToRustRules = void 0;
exports.elixirToRust = elixirToRust;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
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
function elixirToRust(code) {
    return (0, translation_engine_1.translateWithEngine)("elixir", "rust", code);
}
exports.elixirToRustRules = rules;
