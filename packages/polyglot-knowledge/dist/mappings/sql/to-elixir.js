"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToElixirRules = void 0;
exports.sqlToElixir = sqlToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "elixir");
function sqlToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "elixir", code);
}
exports.sqlToElixirRules = rules;
