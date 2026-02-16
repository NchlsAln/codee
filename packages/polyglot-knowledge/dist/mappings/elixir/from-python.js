"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToElixirRules = void 0;
exports.pythonToElixir = pythonToElixir;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "python",
        to: "elixir",
        steps: ["Map FastAPI/Flask routes to Phoenix controllers and LiveView", "Translate ASGI middleware to Plug pipelines"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "python",
        to: "elixir",
        steps: ["Translate SQLAlchemy/Django models to Ecto schemas", "Map validations to changesets"]
    },
    {
        conceptId: "concurrency.actor",
        from: "python",
        to: "elixir",
        steps: ["Translate asyncio classes to GenServer", "Map task groups to supervision trees"]
    },
    {
        conceptId: "paradigms.functional",
        from: "python",
        to: "elixir",
        steps: ["Translate list comprehensions to Enum pipelines", "Use Enum.reduce for folds"]
    }
];
function pythonToElixir(code) {
    return (0, translation_engine_1.translateWithEngine)("python", "elixir", code);
}
exports.pythonToElixirRules = rules;
