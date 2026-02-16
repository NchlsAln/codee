"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToErlangRules = void 0;
exports.pythonToErlang = pythonToErlang;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "python",
        to: "erlang",
        steps: ["Map Flask/FastAPI routes to Cowboy/Webmachine handlers", "Translate ASGI middleware to handler pipelines"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "python",
        to: "erlang",
        steps: ["Translate SQLAlchemy/Django models to Mnesia tables", "Map ORM models to records"]
    },
    {
        conceptId: "concurrency.patterns",
        from: "python",
        to: "erlang",
        steps: ["Map asyncio task groups to OTP supervisors", "Translate queues to process mailboxes"]
    },
    {
        conceptId: "paradigms.functional",
        from: "python",
        to: "erlang",
        steps: ["Translate list comprehensions to Erlang list comprehensions", "Map map/filter to lists:map/filter"]
    }
];
function pythonToErlang(code) {
    return (0, translation_engine_1.translateWithEngine)("python", "erlang", code);
}
exports.pythonToErlangRules = rules;
