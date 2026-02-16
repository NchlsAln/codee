"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToErlangRules = void 0;
exports.dockerfileToErlang = dockerfileToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "erlang");
function dockerfileToErlang(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "erlang", code);
}
exports.dockerfileToErlangRules = rules;
