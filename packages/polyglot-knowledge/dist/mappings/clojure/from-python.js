"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToClojureRules = void 0;
exports.pythonToClojure = pythonToClojure;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "python",
        to: "clojure",
        steps: ["Map Flask/FastAPI routes to Ring/Compojure routes", "Translate ASGI middleware to Ring middleware"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "python",
        to: "clojure",
        steps: ["Translate SQLAlchemy/Django ORM to next.jdbc/HoneySQL", "Map ORM queries to SQL DSL"]
    },
    {
        conceptId: "concurrency.channel",
        from: "python",
        to: "clojure",
        steps: ["Map asyncio queues to core.async channels", "Translate async tasks to go blocks"]
    },
    {
        conceptId: "paradigms.functional",
        from: "python",
        to: "clojure",
        steps: ["Translate list comprehensions to map/filter/reduce", "Use threading macros for pipelines"]
    }
];
function pythonToClojure(code) {
    return (0, translation_engine_1.translateWithEngine)("python", "clojure", code);
}
exports.pythonToClojureRules = rules;
