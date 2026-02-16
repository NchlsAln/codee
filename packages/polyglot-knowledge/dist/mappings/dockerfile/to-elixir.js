"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToElixirRules = void 0;
exports.dockerfileToElixir = dockerfileToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "elixir");
function dockerfileToElixir(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "elixir", code);
}
exports.dockerfileToElixirRules = rules;
