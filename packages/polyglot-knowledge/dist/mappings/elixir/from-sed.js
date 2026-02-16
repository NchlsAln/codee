"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToElixirRules = void 0;
exports.sedToElixir = sedToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "elixir");
function sedToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "elixir", code);
}
exports.sedToElixirRules = rules;
