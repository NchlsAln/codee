"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToElixirRules = void 0;
exports.yamlToElixir = yamlToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "elixir");
function yamlToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "elixir", code);
}
exports.yamlToElixirRules = rules;
