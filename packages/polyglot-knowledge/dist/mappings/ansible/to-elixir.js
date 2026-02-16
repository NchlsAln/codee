"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToElixirRules = void 0;
exports.ansibleToElixir = ansibleToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "elixir");
function ansibleToElixir(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "elixir", code);
}
exports.ansibleToElixirRules = rules;
