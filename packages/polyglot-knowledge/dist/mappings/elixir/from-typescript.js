"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeScriptToElixirRules = void 0;
exports.typeScriptToElixir = typeScriptToElixir;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "typescript",
        to: "elixir",
        steps: ["Map Express/Fastify routes to Phoenix controllers", "Translate middleware to Plug pipelines"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "typescript",
        to: "elixir",
        steps: ["Translate Prisma/TypeORM models to Ecto schemas", "Map validations to changesets"]
    },
    {
        conceptId: "concurrency.actor",
        from: "typescript",
        to: "elixir",
        steps: ["Translate services to GenServer", "Map process managers to supervision trees"]
    },
    {
        conceptId: "paradigms.functional",
        from: "typescript",
        to: "elixir",
        steps: ["Translate array map/filter to Enum pipelines", "Use Enum.reduce for folds"]
    }
];
function typeScriptToElixir(code) {
    return (0, translation_engine_1.translateWithEngine)("typescript", "elixir", code);
}
exports.typeScriptToElixirRules = rules;
