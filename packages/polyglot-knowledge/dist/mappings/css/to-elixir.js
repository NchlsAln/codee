"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToElixirRules = void 0;
exports.cssToElixir = cssToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "elixir");
function cssToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "elixir", code);
}
exports.cssToElixirRules = rules;
