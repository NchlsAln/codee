"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToElixirRules = void 0;
exports.rustToElixir = rustToElixir;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
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
function rustToElixir(code) {
    return (0, translation_engine_1.translateWithEngine)("rust", "elixir", code);
}
exports.rustToElixirRules = rules;
