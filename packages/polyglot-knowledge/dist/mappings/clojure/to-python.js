"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureToPythonRules = void 0;
exports.clojureToPython = clojureToPython;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "clojure",
        to: "python",
        steps: ["Map Ring/Compojure routes to Flask/FastAPI route decorators", "Translate middleware to WSGI/ASGI layers"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "clojure",
        to: "python",
        steps: ["Translate next.jdbc/HoneySQL to SQLAlchemy or Django ORM", "Map SQL DSL to ORM query builders"]
    },
    {
        conceptId: "concurrency.channel",
        from: "clojure",
        to: "python",
        steps: ["Map core.async channels to asyncio queues", "Translate go blocks to async tasks"]
    },
    {
        conceptId: "paradigms.functional",
        from: "clojure",
        to: "python",
        steps: ["Translate map/filter/reduce to comprehensions or map/filter", "Use functools.reduce for folds"]
    }
];
function clojureToPython(code) {
    return (0, translation_engine_1.translateWithEngine)("clojure", "python", code);
}
exports.clojureToPythonRules = rules;
