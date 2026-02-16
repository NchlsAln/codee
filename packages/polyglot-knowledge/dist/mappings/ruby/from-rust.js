"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToRubyRules = void 0;
exports.rustToRuby = rustToRuby;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "rust",
        to: "ruby",
        steps: ["Map Actix/Axum handlers to Rails/Sinatra routes", "Translate tower middleware to Rack middleware"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "rust",
        to: "ruby",
        steps: ["Translate sqlx/Diesel models to ActiveRecord", "Map query builders to ActiveRecord scopes"]
    },
    {
        conceptId: "control-flow.async-await",
        from: "rust",
        to: "ruby",
        steps: ["Translate tokio async to Ruby async frameworks", "Convert async functions to blocks or futures"]
    },
    {
        conceptId: "paradigms.functional",
        from: "rust",
        to: "ruby",
        steps: ["Translate iterator chains to map/select/reduce", "Use Enumerable pipelines"]
    },
    {
        conceptId: "paradigms.closures",
        from: "rust",
        to: "ruby",
        steps: ["Translate Rust closures to blocks", "Use procs/lambdas for captured variables"]
    }
];
function rustToRuby(code) {
    return (0, translation_engine_1.translateWithEngine)("rust", "ruby", code);
}
exports.rustToRubyRules = rules;
