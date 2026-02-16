"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpToRustRules = void 0;
exports.phpToRust = phpToRust;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "php",
        to: "rust",
        steps: ["Map Laravel/Symfony controllers to Actix/Axum handlers", "Convert middleware to tower middleware layers"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "php",
        to: "rust",
        steps: ["Translate Eloquent models to Diesel or sqlx models", "Map query builder chains to query DSL or sqlx macros"]
    },
    {
        conceptId: "control-flow.async-await",
        from: "php",
        to: "rust",
        steps: ["Translate async PHP libraries to tokio async/await", "Replace callbacks with async functions"]
    },
    {
        conceptId: "paradigms.functional",
        from: "php",
        to: "rust",
        steps: ["Translate array_map/array_filter to iterator map/filter", "Use fold for reductions"]
    },
    {
        conceptId: "modules.packaging",
        from: "php",
        to: "rust",
        steps: ["Translate Composer autoloading to crate modules", "Map composer.json deps to Cargo.toml"]
    }
];
function phpToRust(code) {
    return (0, translation_engine_1.translateWithEngine)("php", "rust", code);
}
exports.phpToRustRules = rules;
