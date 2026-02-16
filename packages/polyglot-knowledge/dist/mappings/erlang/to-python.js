"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangToPythonRules = void 0;
exports.erlangToPython = erlangToPython;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "erlang",
        to: "python",
        steps: ["Map Cowboy/Webmachine handlers to Flask/FastAPI routes", "Translate request/response tuples to Response objects"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "erlang",
        to: "python",
        steps: ["Translate Mnesia tables to SQLite or SQLAlchemy models", "Map record storage to ORM models"]
    },
    {
        conceptId: "concurrency.patterns",
        from: "erlang",
        to: "python",
        steps: ["Map OTP supervisors to asyncio task groups", "Translate process links/monitors to task supervision"]
    },
    {
        conceptId: "paradigms.functional",
        from: "erlang",
        to: "python",
        steps: ["Translate list comprehensions to Python comprehensions", "Map lists:map/filter to map/filter"]
    }
];
function erlangToPython(code) {
    return (0, translation_engine_1.translateWithEngine)("erlang", "python", code);
}
exports.erlangToPythonRules = rules;
