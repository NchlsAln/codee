"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToElixirRules = void 0;
exports.scssToElixir = scssToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "elixir");
function scssToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "elixir", code);
}
exports.scssToElixirRules = rules;
