"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToElixirRules = void 0;
exports.terraformToElixir = terraformToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "elixir");
function terraformToElixir(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "elixir", code);
}
exports.terraformToElixirRules = rules;
