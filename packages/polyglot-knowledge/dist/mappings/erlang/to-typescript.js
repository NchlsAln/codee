"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangToTypeScriptRules = void 0;
exports.erlangToTypeScript = erlangToTypeScript;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "erlang",
        to: "typescript",
        steps: ["Map Cowboy/Webmachine handlers to Express/Fastify routes", "Translate request/response tuples to Reply objects"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "erlang",
        to: "typescript",
        steps: ["Translate Mnesia tables to PostgreSQL via Prisma/TypeORM", "Map record storage to ORM models"]
    },
    {
        conceptId: "concurrency.patterns",
        from: "erlang",
        to: "typescript",
        steps: ["Map OTP supervisors to PM2 or queue supervisors", "Translate process links to worker lifecycle management"]
    },
    {
        conceptId: "paradigms.functional",
        from: "erlang",
        to: "typescript",
        steps: ["Translate list comprehensions to array map/filter", "Map lists:map/filter to array operations"]
    }
];
function erlangToTypeScript(code) {
    return (0, translation_engine_1.translateWithEngine)("erlang", "typescript", code);
}
exports.erlangToTypeScriptRules = rules;
