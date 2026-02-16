"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirToKotlinRules = void 0;
exports.elixirToKotlin = elixirToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("elixir", "kotlin");
function elixirToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("elixir", "kotlin", code);
}
exports.elixirToKotlinRules = rules;
