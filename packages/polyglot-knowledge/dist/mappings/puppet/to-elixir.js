"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToElixirRules = void 0;
exports.puppetToElixir = puppetToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "elixir");
function puppetToElixir(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "elixir", code);
}
exports.puppetToElixirRules = rules;
