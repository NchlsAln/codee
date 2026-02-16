"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToErlangRules = void 0;
exports.rustToErlang = rustToErlang;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "rust",
        to: "erlang",
        steps: ["Map Actix/Axum handlers to Cowboy/Webmachine handlers", "Translate middleware to handler pipelines"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "rust",
        to: "erlang",
        steps: ["Translate Diesel/sqlx models to Mnesia tables", "Map structs to records"]
    },
    {
        conceptId: "concurrency.patterns",
        from: "rust",
        to: "erlang",
        steps: ["Map tokio task supervision to OTP supervisors", "Translate channels to process mailboxes"]
    },
    {
        conceptId: "paradigms.functional",
        from: "rust",
        to: "erlang",
        steps: ["Translate iterator chains to lists:map/filter", "Use list comprehensions for transforms"]
    }
];
function rustToErlang(code) {
    return (0, translation_engine_1.translateWithEngine)("rust", "erlang", code);
}
exports.rustToErlangRules = rules;
