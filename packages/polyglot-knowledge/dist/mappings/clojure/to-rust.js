"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureToRustRules = void 0;
exports.clojureToRust = clojureToRust;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "clojure",
        to: "rust",
        steps: ["Map Ring/Compojure routes to Axum/Actix handlers", "Translate middleware to tower layers"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "clojure",
        to: "rust",
        steps: ["Translate next.jdbc/HoneySQL to sqlx or Diesel", "Map SQL DSL to query macros or builders"]
    },
    {
        conceptId: "concurrency.channel",
        from: "clojure",
        to: "rust",
        steps: ["Map core.async channels to Rust channels", "Translate go blocks to async tasks"]
    },
    {
        conceptId: "paradigms.functional",
        from: "clojure",
        to: "rust",
        steps: ["Translate map/filter/reduce to iterator chains", "Use fold for reductions"]
    }
];
function clojureToRust(code) {
    return (0, translation_engine_1.translateWithEngine)("clojure", "rust", code);
}
exports.clojureToRustRules = rules;
