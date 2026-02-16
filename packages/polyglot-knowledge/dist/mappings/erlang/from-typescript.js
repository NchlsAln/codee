"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeScriptToErlangRules = void 0;
exports.typeScriptToErlang = typeScriptToErlang;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "typescript",
        to: "erlang",
        steps: ["Map Express/Fastify routes to Cowboy/Webmachine handlers", "Translate middleware chains to handler pipelines"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "typescript",
        to: "erlang",
        steps: ["Translate Prisma/TypeORM models to Mnesia tables", "Map entities to records"]
    },
    {
        conceptId: "concurrency.patterns",
        from: "typescript",
        to: "erlang",
        steps: ["Map PM2/worker pools to OTP supervisors", "Translate Promise queues to process mailboxes"]
    },
    {
        conceptId: "paradigms.functional",
        from: "typescript",
        to: "erlang",
        steps: ["Translate array map/filter to lists:map/filter", "Use list comprehensions for transforms"]
    }
];
function typeScriptToErlang(code) {
    return (0, translation_engine_1.translateWithEngine)("typescript", "erlang", code);
}
exports.typeScriptToErlangRules = rules;
