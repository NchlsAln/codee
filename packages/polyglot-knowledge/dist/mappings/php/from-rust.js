"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToPhpRules = void 0;
exports.rustToPhp = rustToPhp;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "rust",
        to: "php",
        steps: ["Map Actix/Axum handlers to Laravel/Slim controllers", "Convert tower middleware to PHP middleware stacks"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "rust",
        to: "php",
        steps: ["Translate Diesel/sqlx models to Eloquent models", "Map query builders to Eloquent/DB facade usage"]
    },
    {
        conceptId: "control-flow.async-await",
        from: "rust",
        to: "php",
        steps: ["Translate tokio async to ReactPHP/Swoole", "Convert async functions to callback-based flows"]
    },
    {
        conceptId: "paradigms.functional",
        from: "rust",
        to: "php",
        steps: ["Translate iterator chains to array_map/array_filter", "Use array_reduce for folds"]
    },
    {
        conceptId: "modules.packaging",
        from: "rust",
        to: "php",
        steps: ["Translate crate modules to Composer autoloading", "Map Cargo.toml deps to composer.json"]
    }
];
function rustToPhp(code) {
    return (0, translation_engine_1.translateWithEngine)("rust", "php", code);
}
exports.rustToPhpRules = rules;
