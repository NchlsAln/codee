"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToClojureRules = void 0;
exports.rustToClojure = rustToClojure;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "rust",
        to: "clojure",
        steps: ["Map Actix/Axum handlers to Ring/Compojure routes", "Translate tower middleware to Ring middleware"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "rust",
        to: "clojure",
        steps: ["Translate Diesel/sqlx to next.jdbc/HoneySQL", "Map query builder DSLs to SQL DSL functions"]
    },
    {
        conceptId: "concurrency.channel",
        from: "rust",
        to: "clojure",
        steps: ["Map Rust channels to core.async channels", "Translate async tasks to go blocks"]
    },
    {
        conceptId: "paradigms.functional",
        from: "rust",
        to: "clojure",
        steps: ["Translate iterator chains to map/filter/reduce", "Use threading macros for pipelines"]
    }
];
function rustToClojure(code) {
    return (0, translation_engine_1.translateWithEngine)("rust", "clojure", code);
}
exports.rustToClojureRules = rules;
