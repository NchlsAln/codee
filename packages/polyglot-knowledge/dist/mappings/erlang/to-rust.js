"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangToRustRules = void 0;
exports.erlangToRust = erlangToRust;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "erlang",
        to: "rust",
        steps: ["Map Cowboy/Webmachine handlers to Actix/Axum routes", "Translate request/response tuples to Response types"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "erlang",
        to: "rust",
        steps: ["Translate Mnesia tables to sled or Diesel/sqlx models", "Map record storage to structs"]
    },
    {
        conceptId: "concurrency.patterns",
        from: "erlang",
        to: "rust",
        steps: ["Map OTP supervisors to supervisor crates or task groups", "Translate links/monitors to JoinSet or supervision"]
    },
    {
        conceptId: "paradigms.functional",
        from: "erlang",
        to: "rust",
        steps: ["Translate list comprehensions to iterator chains", "Map lists:map/filter to iterators"]
    }
];
function erlangToRust(code) {
    return (0, translation_engine_1.translateWithEngine)("erlang", "rust", code);
}
exports.erlangToRustRules = rules;
